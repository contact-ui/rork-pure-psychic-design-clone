import { Tabs } from "expo-router";
import React from "react";
import { Share2, Users, Heart, MessageCircle, Book } from "lucide-react-native";
import Colors from "@/constants/colors";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.accent,
        tabBarInactiveTintColor: "#6E6E9B",
        tabBarStyle: {
          backgroundColor: Colors.primary.background,
          borderTopColor: Colors.primary.border,
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
        },
        headerStyle: {
          backgroundColor: Colors.primary.background,
        },
        headerTitleStyle: {
          color: Colors.primary.text,
        },
        headerTintColor: Colors.primary.text,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Horoscope",
          tabBarIcon: ({ color }) => <Share2 color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Psychics",
          tabBarIcon: ({ color }) => <Users color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="readings"
        options={{
          title: "Compatibilité",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ position: 'relative' }}>
              <Heart color={color} size={24} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chatroom",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ position: 'relative' }}>
              <MessageCircle color={color} size={24} />
              {focused && (
                <View style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: '#FF4444',
                  borderRadius: 10,
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>12</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Lectures",
          tabBarIcon: ({ color }) => <Book color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}