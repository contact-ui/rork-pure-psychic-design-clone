import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { Gift, Settings, Plus } from "lucide-react-native";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";

interface ZodiacProfile {
  name: string;
  birthDate: string;
  sign: string;
  element: string;
  moonSign: string;
  polarity: string;
  ascendant: string;
  modality: string;
  combination: string;
  planet: string;
  avatar: string;
}

const mockProfiles: ZodiacProfile[] = [
  {
    name: "Wael",
    birthDate: "April 11, 1997 - 09:00 AM",
    sign: "Bélier",
    element: "Feu",
    moonSign: "Gémeaux",
    polarity: "Masculin",
    ascendant: "Gémeaux",
    modality: "Cardinal",
    combination: "Sagittaire",
    planet: "Mars",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export default function HoroscopeScreen() {
  const [selectedProfile] = useState<ZodiacProfile>(mockProfiles[0]);
  const [selectedTab, setSelectedTab] = useState<string>("AUJOURD'HUI");
  
  const tabs = ["HIER", "AUJOURD'HUI", "DEMAIN", "SEMAINE", "MOIS", "ANNÉE"];
  
  const formatDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
  };
  
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: formatDate(),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.primary.background,
          },
          headerTitleStyle: {
            color: Colors.primary.text,
            fontSize: 16,
            fontWeight: '600',
          },
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <View style={styles.flagIcon}>
                <Text style={styles.flagText}>🇺🇦</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerIcon}>
                <Gift color={Colors.primary.accent} size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon}>
                <Settings color={Colors.primary.text} size={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      
      <StarryBackground />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Compatibility Card */}
        <View style={styles.compatibilityCard}>
          <Text style={styles.compatibilityTitle}>Compatibility based on</Text>
          <Text style={styles.compatibilitySubtitle}>birth charts</Text>
          <TouchableOpacity style={styles.readInsightsButton}>
            <Text style={styles.readInsightsText}>Read insights</Text>
          </TouchableOpacity>
          <View style={styles.compatibilityIllustration}>
            <Text style={styles.illustrationText}>👫</Text>
          </View>
        </View>
        
        {/* Lunar Calendar */}
        <Text style={styles.sectionTitle}>Calendrier lunaire</Text>
        
        <View style={styles.lunarCard}>
          <View style={styles.lunarHeader}>
            <View style={styles.moonPhase}>
              <Text style={styles.moonEmoji}>🌙</Text>
            </View>
            <View style={styles.lunarInfo}>
              <Text style={styles.lunarPhase}>Gibbeuse montante</Text>
              <Text style={styles.lunarSign}>en Sagittaire ♐ (17°11&apos;)</Text>
              <Text style={styles.lunarIllumination}>Illumination 81%</Text>
            </View>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.moonPhasesContainer}>
            {['Aug 1', 'Aug 9', 'Aug 16', 'Aug 23', 'Aug 31'].map((date, index) => (
              <View key={date} style={styles.moonPhaseItem}>
                <View style={[styles.moonPhaseIcon, { opacity: index === 2 ? 1 : 0.5 }]}>
                  <Text style={styles.moonPhaseEmoji}>
                    {index === 0 ? '🌑' : index === 1 ? '🌓' : index === 2 ? '🌕' : index === 3 ? '🌗' : '🌑'}
                  </Text>
                </View>
                <Text style={styles.moonPhaseDate}>{date}</Text>
              </View>
            ))}
          </ScrollView>
          
          <Text style={styles.lunarNote}>Note : toutes heures ET</Text>
        </View>
        
        {/* Hair Cut Calendar */}
        <View style={styles.hairCutSection}>
          <Text style={styles.hairCutTitle}>Calendrier de la coupe des cheveux pour Aug, 2025</Text>
          <TouchableOpacity style={styles.favoriteButton}>
            <Text style={styles.favoriteIcon}>⭐</Text>
          </TouchableOpacity>
        </View>
        
        {/* Style Tip Card */}
        <View style={styles.styleTipCard}>
          <View style={styles.styleTipHeader}>
            <Text style={styles.styleTipTitle}>How to be stylish?</Text>
            <View style={styles.styleTipIcon}>
              <Text style={styles.crownIcon}>👑</Text>
            </View>
          </View>
          <Text style={styles.styleTipText}>
            Choisissez une sacoche dans un style masculin et fort. Optez pour de la toile ou un coton avec une finition cirée et imperméable pour plus de style et de praticité. Les accessoires en cuir et le matériel surdimensionné ajouteront de la
          </Text>
        </View>
        
        {/* Profile Circles */}
        <View style={styles.profileSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.addProfileButton}>
              <Plus color={Colors.primary.accent} size={24} />
              <Text style={styles.addProfileText}>Ajouter u...</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.profileCircle, styles.activeProfile]}>
              <View style={styles.profileAvatar}>
                <Text style={styles.profileAvatarText}>W</Text>
              </View>
              <Text style={styles.profileName}>Wael</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileCircle}>
              <View style={styles.profileAvatar}>
                <Text style={styles.profileAvatarText}>A</Text>
              </View>
              <Text style={styles.profileName}>add</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileCircle}>
              <View style={[styles.profileAvatar, { backgroundColor: Colors.zodiac.taurus }]}>
                <Text style={styles.zodiacSymbol}>♉</Text>
              </View>
              <Text style={styles.profileName}>Taureau</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileCircle}>
              <View style={[styles.profileAvatar, { backgroundColor: Colors.zodiac.gemini }]}>
                <Text style={styles.zodiacSymbol}>♊</Text>
              </View>
              <Text style={styles.profileName}>Gémeaux</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        {/* Profile Details */}
        <View style={styles.profileDetails}>
          <Text style={styles.profileDetailsName}>{selectedProfile.name}</Text>
          <Text style={styles.profileDetailsBirthDate}>{selectedProfile.birthDate}</Text>
          
          <View style={styles.profileDetailsGrid}>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Signe solaire</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.sign} ♈</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Element</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.element} △</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Signe lunaire</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.moonSign} ♊</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Polarité</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.polarity}</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Ascendant</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.ascendant} ♊</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Modalité</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.modality} △</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Combinaison</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.combination} ♐</Text>
            </View>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailLabel}>Planète</Text>
              <Text style={styles.profileDetailValue}>{selectedProfile.planet} ♂</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.themeNatalButton}>
            <Text style={styles.themeNatalText}>Thème natal</Text>
          </TouchableOpacity>
        </View>
        
        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity 
              key={tab} 
              style={[styles.tab, selectedTab === tab && styles.activeTab]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Essential Section */}
        <View style={styles.essentialSection}>
          <Text style={styles.essentialTitle}>Essentiel: <Text style={styles.essentialHighlight}>Santé</Text></Text>
          
          <View style={styles.progressBars}>
            <View style={styles.progressItem}>
              <Text style={styles.progressLabel}>Amour</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '60%', backgroundColor: Colors.primary.accent }]} />
              </View>
              <Text style={styles.progressValue}>60%</Text>
            </View>
            
            <View style={styles.progressItem}>
              <Text style={styles.progressLabel}>Carrière</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '80%', backgroundColor: Colors.primary.accent }]} />
              </View>
              <Text style={styles.progressValue}>80%</Text>
            </View>
            
            <View style={styles.progressItem}>
              <Text style={styles.progressLabel}>Santé</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '40%', backgroundColor: Colors.primary.accent }]} />
              </View>
              <Text style={styles.progressValue}>40%</Text>
            </View>
          </View>
        </View>
        
        {/* Tarot Card */}
        <TouchableOpacity style={styles.tarotCard}>
          <View style={styles.tarotImageContainer}>
            <Text style={styles.tarotImage}>🌌</Text>
          </View>
          <View style={styles.tarotContent}>
            <Text style={styles.tarotTitle}>TAROT Nebula</Text>
            <Text style={styles.tarotSubtitle}>Découvrez votre carte du jour</Text>
          </View>
          <Text style={styles.tarotArrow}>›</Text>
        </TouchableOpacity>
        
        {/* Horoscope Text */}
        <Text style={styles.horoscopeTitle}>Votre horoscope pour Aujourd&apos;hui</Text>
        <Text style={styles.horoscopeText}>
          Le moment est venu de chercher de nouvelles
        </Text>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 16,
  },
  flagIcon: {
    marginLeft: 16,
  },
  flagText: {
    fontSize: 20,
  },
  compatibilityCard: {
    backgroundColor: Colors.primary.accent,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  compatibilityTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  compatibilitySubtitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  readInsightsButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  readInsightsText: {
    color: Colors.primary.text,
    fontSize: 14,
    fontWeight: '600',
  },
  compatibilityIllustration: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  illustrationText: {
    fontSize: 40,
  },
  sectionTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  lunarCard: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  lunarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  moonPhase: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2A2A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  moonEmoji: {
    fontSize: 30,
  },
  lunarInfo: {
    flex: 1,
  },
  lunarPhase: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  lunarSign: {
    color: '#6E6E9B',
    fontSize: 14,
    marginVertical: 2,
  },
  lunarIllumination: {
    color: '#6E6E9B',
    fontSize: 14,
  },
  moonPhasesContainer: {
    marginBottom: 16,
  },
  moonPhaseItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  moonPhaseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  moonPhaseEmoji: {
    fontSize: 20,
  },
  moonPhaseDate: {
    color: '#6E6E9B',
    fontSize: 12,
  },
  lunarNote: {
    color: '#6E6E9B',
    fontSize: 12,
  },
  hairCutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  hairCutTitle: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    fontSize: 20,
  },
  styleTipCard: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FF69B4',
  },
  styleTipHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  styleTipTitle: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  styleTipIcon: {
    padding: 4,
  },
  crownIcon: {
    fontSize: 24,
  },
  styleTipText: {
    color: '#6E6E9B',
    fontSize: 14,
    lineHeight: 20,
  },
  profileSection: {
    marginBottom: 24,
  },
  addProfileButton: {
    alignItems: 'center',
    marginRight: 16,
    width: 70,
  },
  addProfileText: {
    color: Colors.primary.text,
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  profileCircle: {
    alignItems: 'center',
    marginRight: 16,
    width: 70,
  },
  activeProfile: {
    opacity: 1,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.zodiac.aries,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileAvatarText: {
    color: Colors.primary.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  zodiacSymbol: {
    color: Colors.primary.text,
    fontSize: 24,
  },
  profileName: {
    color: Colors.primary.text,
    fontSize: 12,
    textAlign: 'center',
  },
  profileDetails: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  profileDetailsName: {
    color: Colors.primary.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileDetailsBirthDate: {
    color: '#6E6E9B',
    fontSize: 14,
    marginBottom: 20,
  },
  profileDetailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  profileDetailItem: {
    width: '48%',
    marginBottom: 16,
  },
  profileDetailLabel: {
    color: '#6E6E9B',
    fontSize: 12,
    marginBottom: 4,
  },
  profileDetailValue: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: '600',
  },
  themeNatalButton: {
    backgroundColor: Colors.primary.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  themeNatalText: {
    color: Colors.primary.text,
    fontSize: 14,
    fontWeight: '600',
  },
  tabsContainer: {
    marginBottom: 24,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary.accent,
  },
  tabText: {
    color: '#6E6E9B',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.primary.text,
    fontWeight: 'bold',
  },
  essentialSection: {
    marginBottom: 24,
  },
  essentialTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  essentialHighlight: {
    color: Colors.primary.accent,
  },
  progressBars: {
    gap: 16,
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressLabel: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: '600',
    width: 80,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#2A2A5A',
    borderRadius: 4,
    marginHorizontal: 16,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressValue: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: '600',
    width: 40,
    textAlign: 'right',
  },
  tarotCard: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tarotImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#2A2A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tarotImage: {
    fontSize: 24,
  },
  tarotContent: {
    flex: 1,
  },
  tarotTitle: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tarotSubtitle: {
    color: '#6E6E9B',
    fontSize: 14,
  },
  tarotArrow: {
    color: '#6E6E9B',
    fontSize: 20,
  },
  horoscopeTitle: {
    color: Colors.primary.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  horoscopeText: {
    color: '#6E6E9B',
    fontSize: 14,
    lineHeight: 20,
  },
});