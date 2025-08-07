import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";

type Star = {
  top: number;
  left: number;
  size: number;
  opacity: Animated.Value;
  speed: number;
};

const StarryBackground: React.FC = () => {
  const stars = useRef<Star[]>([]);
  const { width, height } = Dimensions.get("window");
  
  // Create stars
  useEffect(() => {
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2 + 1;
      const opacity = new Animated.Value(Math.random());
      const speed = Math.random() * 2000 + 1000;
      
      stars.current.push({
        top: Math.random() * height,
        left: Math.random() * width,
        size,
        opacity,
        speed,
      });
      
      // Start twinkling animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: Math.random() * 0.5 + 0.5,
            duration: speed,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: Math.random() * 0.3,
            duration: speed,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [width, height]);
  
  return (
    <View style={styles.container}>
      {stars.current.map((star, index) => (
        <Animated.View
          key={index}
          style={[
            styles.star,
            {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  star: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
});

export default StarryBackground;