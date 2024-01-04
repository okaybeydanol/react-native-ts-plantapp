import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Button from '@src/components/UI/Button';

// Image
import background from '@assets/image/background.png';
import welcome from '@assets/image/welcome.png';

// Type
import {WelcomeNavigationProps} from '@src/navigation/types';

// Style
import styles from './style';

const SplashWelcome = ({
  navigation,
}: WelcomeNavigationProps<'SplashScreen'>) => {
  const goToOnboarding = () => {
    navigation.replace('OnboardingScreen');
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>Welcome to </Text>
            <Text style={styles.appNameText}>PlantApp</Text>
          </View>
          <Text style={styles.descriptionText}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.onboardingImage}
            source={welcome}
          />
        </View>

        <View style={styles.footerContainer}>
          <Button
            onPress={goToOnboarding}
            textProps={{style: styles.buttonText}}
            title="Get Started"
          />
          <Text style={styles.termsText}>
            By tapping next, you are agreeing to PlantID{' '}
            <Text style={styles.underline}>Terms of Use</Text> &{' '}
            <Text style={styles.underline}>Privacy Policy</Text>.
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SplashWelcome;
