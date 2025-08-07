import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createContextHook from "@nkzw/create-context-hook";
import { UserProfile } from "@/types/user";

export const [UserProfileProvider, useUserProfile] = createContextHook(() => {
  const [profile, setProfile] = useState<UserProfile>({});
  const [loading, setLoading] = useState<boolean>(true);

  // Load profile from AsyncStorage on mount
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedProfile = await AsyncStorage.getItem("userProfile");
        if (storedProfile) {
          setProfile(JSON.parse(storedProfile));
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // Save profile to AsyncStorage whenever it changes
  useEffect(() => {
    const saveProfile = async () => {
      try {
        await AsyncStorage.setItem("userProfile", JSON.stringify(profile));
      } catch (error) {
        console.error("Failed to save profile:", error);
      }
    };

    if (!loading) {
      saveProfile();
    }
  }, [profile, loading]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const clearProfile = async () => {
    try {
      await AsyncStorage.removeItem("userProfile");
      setProfile({});
    } catch (error) {
      console.error("Failed to clear profile:", error);
    }
  };

  return {
    profile,
    updateProfile,
    clearProfile,
    loading,
  };
});