import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import Colors from "@/constants/colors";
import StarryBackground from "@/components/StarryBackground";

interface ChatMessage {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
  isOnline?: boolean;
  unreadCount?: number;
}

const mockChats: ChatMessage[] = [
  {
    id: '1',
    name: 'Allana444',
    message: 'Nice to see you here. The runes speak of upcoming changes in your life. Please conc...',
    time: 'Hier, 10:36 PM',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    isOnline: true
  },
  {
    id: '2',
    name: 'Dean Starlight',
    message: 'Hello, darling! Do not stop thinking of life as an adventure. You have no security unless...',
    time: 'Hier, 3:52 PM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    unreadCount: 1
  },
  {
    id: '3',
    name: 'Laraib',
    message: 'Hey! Affirmation for you for today: "I\'m freeing myself from all destructive doubt...',
    time: '07/19/25',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    unreadCount: 1
  },
  {
    id: '4',
    name: 'Lady Tokori',
    message: 'Greetings! If you can\'t yet do great things, do small things in a great way. Would you...',
    time: '07/12/25',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    unreadCount: 1
  },
  {
    id: '5',
    name: 'Martha Shapiro',
    message: 'Lucky days of the month: 23, 26, 30 . Let\'s do a tarot reading to find out what days m...',
    time: '03/14/25',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    unreadCount: 1
  },
  {
    id: '6',
    name: 'SunSofia',
    message: 'Dear, I sincerely apologize for having to cancel your incoming request. Looking for...',
    time: '06/04/24',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    unreadCount: 1
  },
  {
    id: '7',
    name: 'Gabriel Arcano',
    message: 'Hi, darling! oh no, I think I accidentally rejected your request by mistake! I\'m sorr...',
    time: '05/22/24',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    unreadCount: 1
  },
  {
    id: '8',
    name: 'Jade Star',
    message: '',
    time: '05/16/24',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  }
];

export default function ChatroomScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'Chatroom',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.primary.background,
          },
          headerTitleStyle: {
            color: Colors.primary.text,
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerRight: () => (
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>$0.00</Text>
            </View>
          ),
        }}
      />
      
      <StarryBackground />
      
      {/* Promotional Banner */}
      <View style={styles.promoBanner}>
        <Text style={styles.promoIcon}>💰</Text>
        <Text style={styles.promoText}>Get $16.00 for readings for </Text>
        <Text style={styles.promoOldPrice}>$15.99</Text>
        <Text style={styles.promoNewPrice}> $2.99</Text>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {mockChats.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatItem}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: chat.avatar }} style={styles.avatar} />
              {chat.isOnline && <View style={styles.onlineIndicator} />}
            </View>
            
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{chat.name}</Text>
                {chat.name === 'Allana444' && (
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>70% sûr</Text>
                  </View>
                )}
                <View style={styles.spacer} />
                <Text style={styles.chatTime}>{chat.time}</Text>
              </View>
              
              {chat.message && (
                <Text style={styles.chatMessage} numberOfLines={2}>
                  {chat.message}
                </Text>
              )}
            </View>
            
            <View style={styles.chatActions}>
              {chat.unreadCount && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>{chat.unreadCount}</Text>
                </View>
              )}
              <TouchableOpacity style={styles.favoriteButton}>
                <Text style={styles.favoriteIcon}>✨</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  balanceContainer: {
    marginRight: 16,
  },
  balanceText: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoBanner: {
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  promoIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  promoText: {
    color: Colors.primary.text,
    fontSize: 14,
    fontWeight: '600',
  },
  promoOldPrice: {
    color: Colors.primary.text,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  promoNewPrice: {
    color: Colors.primary.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 8,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00FF00',
    borderWidth: 2,
    borderColor: Colors.primary.background,
  },
  chatContent: {
    flex: 1,
    marginRight: 8,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingBadge: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 8,
  },
  ratingText: {
    color: Colors.primary.text,
    fontSize: 10,
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1,
  },
  chatTime: {
    color: '#6E6E9B',
    fontSize: 12,
  },
  chatMessage: {
    color: '#6E6E9B',
    fontSize: 14,
    lineHeight: 18,
  },
  chatActions: {
    alignItems: 'center',
  },
  unreadBadge: {
    backgroundColor: '#FF4444',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  unreadCount: {
    color: Colors.primary.text,
    fontSize: 12,
    fontWeight: 'bold',
  },
  favoriteButton: {
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 16,
  },
});