export type Gender = "male" | "female";

export type RelationshipStatus = 
  | "single" 
  | "in_relationship" 
  | "cohabiting" 
  | "engaged" 
  | "married" 
  | "separated" 
  | "divorced" 
  | "widowed" 
  | "complicated";

export type Interest = 
  | "money" 
  | "work" 
  | "friends" 
  | "love" 
  | "family" 
  | "career";

export type UserProfile = {
  birthDate?: {
    day: number;
    month: number;
    year: number;
  };
  birthTime?: {
    hour: number;
    minute: number;
  };
  birthPlace?: string;
  gender?: Gender;
  name?: string;
  relationshipStatus?: RelationshipStatus;
  interests?: Interest[];
  horoscopeReminder?: {
    enabled: boolean;
    time?: {
      hour: number;
      minute: number;
    };
  };
  referralSource?: string;
  zodiacSign?: string;
};