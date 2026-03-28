import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Search, Filter } from "lucide-react-native";
import StarryBackground from "@/components/StarryBackground";
import TextInput from "@/components/TextInput";
import Colors from "@/constants/colors";

export default function ReadingsScreen() {
  const readingCategories = [
    {
      id: "tarot",
      title: "Tarot",
      image: "https://images.unsplash.com/photo-1627480963764-a1b7ff1ff87c?q=80&w=200",
    },
    {
      id: "astrology",
      title: "Astrology",
      image: "https://images.unsplash.com/photo-1532968885671-19be8d9d4284?q=80&w=200",
    },
    {
      id: "numerology",
      title: "Numerology",
      image: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=200",
    },
    {
      id: "crystals",
      title: "Crystals",
      image: "https://images.unsplash.com/photo-1598019220577-cade80828d27?q=80&w=200",
    },
  ];
  
  const featuredReadings = [
    {
      id: "love-tarot",
      title: "Love Tarot Reading",
      description: "Discover what the cards reveal about your romantic future",
      image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=300",
      duration: "10 min",
      category: "Tarot",
    },
    {
      id: "career-path",
      title: "Career Path Reading",
      description: "Navigate your professional journey with cosmic guidance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300",
      duration: "15 min",
      category: "Astrology",
    },
    {
      id: "life-purpose",
      title: "Life Purpose Reading",
      description: "Uncover your true calling and spiritual mission",
      image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=300",
      duration: "20 min",
      category: "Numerology",
    },
  ];
  
  const popularReadings = [
    {
      id: "compatibility",
      title: "Compatibility Reading",
      description: "Are you and your partner cosmically aligned?",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=300",
      duration: "15 min",
      category: "Astrology",
    },
    {
      id: "past-life",
      title: "Past Life Reading",
      description: "Explore your soul's journey through previous incarnations",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300",
      duration: "25 min",
      category: "Tarot",
    },
    {
      id: "chakra-balance",
      title: "Chakra Balance Reading",
      description: "Identify and heal energy blockages in your spiritual centers",
      image: "https://images.unsplash.com/photo-1566324444783-45edcf57e5a1?q=80&w=300",
      duration: "20 min",
      category: "Crystals",
    },
  ];
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Psychic Readings</Text>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search color="#6E6E9B" size={20} style={styles.searchIcon} />
            <TextInput
              placeholder="Search readings..."
              style={styles.searchInput}
              placeholderTextColor="#6E6E9B"
            />
          </View>
          
          <TouchableOpacity style={styles.filterButton}>
            <Filter color={Colors.primary.text} size={20} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Categories</Text>
        
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {readingCategories.map((category) => (
            <TouchableOpacity 
              key={category.id} 
              style={styles.categoryCard}
            >
              <Image 
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <Text style={styles.sectionTitle}>Featured Readings</Text>
        
        {featuredReadings.map((reading) => (
          <TouchableOpacity 
            key={reading.id} 
            style={styles.readingCard}
          >
            <Image 
              source={{ uri: reading.image }}
              style={styles.readingImage}
            />
            <View style={styles.readingContent}>
              <View style={styles.readingHeader}>
                <Text style={styles.readingTitle}>{reading.title}</Text>
                <View style={styles.readingMeta}>
                  <Text style={styles.readingCategory}>{reading.category}</Text>
                  <Text style={styles.readingDuration}>{reading.duration}</Text>
                </View>
              </View>
              <Text style={styles.readingDescription}>
                {reading.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        
        <Text style={styles.sectionTitle}>Popular Readings</Text>
        
        {popularReadings.map((reading) => (
          <TouchableOpacity 
            key={reading.id} 
            style={styles.readingCard}
          >
            <Image 
              source={{ uri: reading.image }}
              style={styles.readingImage}
            />
            <View style={styles.readingContent}>
              <View style={styles.readingHeader}>
                <Text style={styles.readingTitle}>{reading.title}</Text>
                <View style={styles.readingMeta}>
                  <Text style={styles.readingCategory}>{reading.category}</Text>
                  <Text style={styles.readingDuration}>{reading.duration}</Text>
                </View>
              </View>
              <Text style={styles.readingDescription}>
                {reading.description}
              </Text>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    color: Colors.primary.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary.card,
    borderRadius: 100,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: Colors.primary.text,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary.card,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesContent: {
    paddingRight: 16,
  },
  categoryCard: {
    width: 100,
    marginRight: 12,
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryTitle: {
    color: Colors.primary.text,
    fontSize: 14,
    textAlign: "center",
  },
  readingCard: {
    flexDirection: "row",
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  readingImage: {
    width: 100,
    height: 100,
  },
  readingContent: {
    flex: 1,
    padding: 12,
  },
  readingHeader: {
    marginBottom: 8,
  },
  readingTitle: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  readingMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  readingCategory: {
    color: Colors.primary.accent,
    fontSize: 12,
  },
  readingDuration: {
    color: "#6E6E9B",
    fontSize: 12,
  },
  readingDescription: {
    color: "#6E6E9B",
    fontSize: 12,
    lineHeight: 18,
  },
});