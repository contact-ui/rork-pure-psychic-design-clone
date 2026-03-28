import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import { Heart } from "lucide-react-native";
import Colors from "@/constants/colors";
import StarryBackground from "@/components/StarryBackground";

interface Psychic {
  id: string;
  name: string;
  experience: string;
  rating: number;
  reviews: number;
  price: string;
  isOnline: boolean;
  image: string;
  specialties?: string[];
}

const mockPsychics: Psychic[] = [
  {
    id: '1',
    name: 'Astral Seer',
    experience: '15 années expérience',
    rating: 4.5,
    reviews: 139,
    price: '$3.99/min',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Psychic Laura',
    experience: '12 années expérience',
    rating: 4.5,
    reviews: 100,
    price: '$3.99/min',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'STELLA S',
    experience: '10 années expérience',
    rating: 4.5,
    reviews: 85,
    price: '$3.99/min',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Psychic Gabriel',
    experience: '3 années expérience',
    rating: 4.5,
    reviews: 164,
    price: '$3.99/min',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'MysticVKS',
    experience: '20 années expérience',
    rating: 5.0,
    reviews: 1056,
    price: '$4.99/min',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'Mathew',
    experience: '6 années expérience',
    rating: 5.0,
    reviews: 92,
    price: '$3.99/min',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
];

export default function PsychicsScreen() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Text key={i} style={styles.star}>⭐</Text>);
    }
    
    if (hasHalfStar) {
      stars.push(<Text key="half" style={styles.star}>⭐</Text>);
    }
    
    return stars;
  };
  
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'Psychics',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.primary.background,
          },
          headerTitleStyle: {
            color: Colors.primary.text,
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerIcon}>
              <Heart color={Colors.primary.text} size={24} />
            </TouchableOpacity>
          ),
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
        {/* Love Question Card */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>Will I find true love in</Text>
          <Text style={styles.questionText}>the future?</Text>
          <Text style={styles.questionArrow}>→</Text>
          <View style={styles.questionIllustration}>
            <Text style={styles.questionEmoji}>💕</Text>
          </View>
        </View>
        
        {/* Compatible Mediums Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionIcon}>🎯</Text>
            <Text style={styles.sectionTitle}>Vos médiums compatibles</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tout voir</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionDescription}>
          Des médiums correspondant parfaitement à votre profil et fortement recommandés par leurs fidèles adeptes.
        </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.psychicsContainer}>
          {mockPsychics.slice(0, 3).map((psychic) => (
            <View key={psychic.id} style={styles.psychicCard}>
              {psychic.isOnline && (
                <View style={styles.onlineIndicator}>
                  <View style={styles.onlineDot} />
                  <Text style={styles.onlineText}>en ligne</Text>
                </View>
              )}
              
              <Image source={{ uri: psychic.image }} style={styles.psychicImage} />
              
              <Text style={styles.psychicName}>{psychic.name}</Text>
              <Text style={styles.psychicExperience}>{psychic.experience}</Text>
              
              <View style={styles.ratingContainer}>
                {renderStars(psychic.rating)}
                <Text style={styles.reviewCount}>{psychic.reviews}</Text>
              </View>
              
              <TouchableOpacity style={styles.discussionButton}>
                <Text style={styles.discussionIcon}>💬</Text>
                <Text style={styles.discussionText}>DISCUSSION</Text>
              </TouchableOpacity>
              
              <Text style={styles.psychicPrice}>{psychic.price}</Text>
            </View>
          ))}
        </ScrollView>
        
        {/* Find Ideal Medium Card */}
        <TouchableOpacity style={styles.findMediumCard}>
          <Text style={styles.findMediumIcon}>🔍</Text>
          <View style={styles.findMediumContent}>
            <Text style={styles.findMediumTitle}>Prêt à trouver le médium idéal ?</Text>
            <Text style={styles.findMediumSubtitle}>Mettons vous en relation !</Text>
          </View>
          <Text style={styles.findMediumArrow}>›</Text>
        </TouchableOpacity>
        
        {/* Most Accurate Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionIcon}>🎯</Text>
            <Text style={styles.sectionTitle}>Les plus précis</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tout voir</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionDescription}>
          Des médiums reconnus pour la précision exceptionnelle de leurs prédictions et de leurs conseils.
        </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.psychicsContainer}>
          {mockPsychics.slice(3).map((psychic) => (
            <View key={psychic.id} style={styles.psychicCard}>
              {psychic.isOnline && (
                <View style={styles.onlineIndicator}>
                  <View style={styles.onlineDot} />
                  <Text style={styles.onlineText}>en ligne</Text>
                </View>
              )}
              
              <Image source={{ uri: psychic.image }} style={styles.psychicImage} />
              
              <Text style={styles.psychicName}>{psychic.name}</Text>
              <Text style={styles.psychicExperience}>{psychic.experience}</Text>
              
              <View style={styles.ratingContainer}>
                {renderStars(psychic.rating)}
                <Text style={styles.reviewCount}>{psychic.reviews}</Text>
              </View>
              
              <TouchableOpacity style={styles.discussionButton}>
                <Text style={styles.discussionIcon}>💬</Text>
                <Text style={styles.discussionText}>DISCUSSION</Text>
              </TouchableOpacity>
              
              <Text style={styles.psychicPrice}>{psychic.price}</Text>
            </View>
          ))}
        </ScrollView>
        
        {/* Love Readings Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionIcon}>💜</Text>
            <Text style={styles.sectionTitle}>Les meilleures lectures en amour</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tout voir</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionDescription}>
          Des médiums qui ont gagné leur réputation d&apos;experts en questions d&apos;amour et en réparation de relations
        </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.psychicsContainer}>
          {mockPsychics.slice(0, 3).map((psychic) => (
            <View key={`love-${psychic.id}`} style={styles.loveReadingCard}>
              {psychic.isOnline && (
                <View style={styles.onlineIndicator}>
                  <View style={styles.onlineDot} />
                  <Text style={styles.onlineText}>en ligne</Text>
                </View>
              )}
              
              <Image source={{ uri: psychic.image }} style={styles.loveReadingImage} />
              
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playIcon}>▶</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  headerIcon: {
    marginLeft: 16,
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
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  questionCard: {
    backgroundColor: '#FFB6C1',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  questionText: {
    color: Colors.primary.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionArrow: {
    color: Colors.primary.background,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  questionIllustration: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  questionEmoji: {
    fontSize: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  sectionTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: Colors.primary.accent,
    fontSize: 14,
    fontWeight: '600',
  },
  sectionDescription: {
    color: '#6E6E9B',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  psychicsContainer: {
    marginBottom: 24,
  },
  psychicCard: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: 200,
    alignItems: 'center',
    position: 'relative',
  },
  onlineIndicator: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00FF00',
    marginRight: 4,
  },
  onlineText: {
    color: '#00FF00',
    fontSize: 10,
    fontWeight: '600',
  },
  psychicImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  psychicName: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  psychicExperience: {
    color: '#6E6E9B',
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  star: {
    fontSize: 12,
    marginRight: 2,
  },
  reviewCount: {
    color: '#6E6E9B',
    fontSize: 12,
    marginLeft: 4,
  },
  discussionButton: {
    backgroundColor: '#40E0D0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
  },
  discussionIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  discussionText: {
    color: Colors.primary.text,
    fontSize: 12,
    fontWeight: 'bold',
  },
  psychicPrice: {
    color: Colors.primary.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  findMediumCard: {
    backgroundColor: Colors.primary.accent,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  findMediumIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  findMediumContent: {
    flex: 1,
  },
  findMediumTitle: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  findMediumSubtitle: {
    color: Colors.primary.text,
    fontSize: 14,
  },
  findMediumArrow: {
    color: Colors.primary.text,
    fontSize: 20,
  },
  loveReadingCard: {
    borderRadius: 16,
    marginRight: 16,
    width: 150,
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  loveReadingImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  playButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: Colors.primary.background,
    fontSize: 16,
  },
});