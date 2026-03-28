import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Settings, User, Bell, CreditCard, HelpCircle, LogOut } from "lucide-react-native";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useRouter } from "expo-router";
import zodiacSigns from "@/constants/zodiacSigns";

export default function ProfileScreen() {
  const router = useRouter();
  const { profile, clearProfile } = useUserProfile();
  
  const handleLogout = async () => {
    await clearProfile();
    router.replace("/");
  };
  
  const getZodiacSign = () => {
    if (!profile.birthDate) return null;
    
    const { month, day } = profile.birthDate;
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "aquarius";
    } else {
      return "pisces";
    }
  };
  
  const zodiacSign = getZodiacSign();
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings color={Colors.primary.text} size={24} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile.name || "User"}</Text>
              {zodiacSign && (
                <View style={styles.zodiacContainer}>
                  <Text style={styles.zodiacSymbol}>
                    {zodiacSigns[zodiacSign].symbol}
                  </Text>
                  <Text style={styles.zodiacName}>
                    {zodiacSigns[zodiacSign].name}
                  </Text>
                </View>
              )}
            </View>
          </View>
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Readings</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Months</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Account</Text>
        
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <User color={Colors.primary.accent} size={20} />
            <Text style={styles.menuText}>Personal Information</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Bell color={Colors.primary.accent} size={20} />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <CreditCard color={Colors.primary.accent} size={20} />
            <Text style={styles.menuText}>Subscription</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Support</Text>
        
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <HelpCircle color={Colors.primary.accent} size={20} />
            <Text style={styles.menuText}>Help Center</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={handleLogout}
          >
            <LogOut color="#FF5757" size={20} />
            <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.versionText}>Pure Psychic v1.0.0</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    color: Colors.primary.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary.card,
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  zodiacContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  zodiacSymbol: {
    color: Colors.primary.accent,
    fontSize: 16,
    marginRight: 4,
  },
  zodiacName: {
    color: "#6E6E9B",
    fontSize: 14,
  },
  editButton: {
    backgroundColor: Colors.primary.accent,
    borderRadius: 100,
    paddingVertical: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: Colors.primary.text,
    fontSize: 14,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    color: "#6E6E9B",
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: Colors.primary.border,
  },
  sectionTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  menuContainer: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary.border,
  },
  menuText: {
    color: Colors.primary.text,
    fontSize: 16,
    marginLeft: 12,
  },
  logoutText: {
    color: "#FF5757",
  },
  versionText: {
    color: "#6E6E9B",
    fontSize: 12,
    textAlign: "center",
  },
});