import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

// Component
import HomeHeader from '@src/components/Home/Header';
import HomePremium from '@src/components/Home/Premium';
import HomeQuestions from '@src/components/Home/Questions';
import HomeCategories from '@src/components/Home/Categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView nestedScrollEnabled={true}>
        <HomePremium />
        <HomeQuestions />
        <HomeCategories />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
