import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// Api
import {useGetQuestionsQuery} from '@src/store/api/home';

//Style
import styles from './style';

const HomeQuestions = () => {
  const {data, isLoading} = useGetQuestionsQuery();

  return (
    <>
      <View>
        <Text style={styles.headingText}>Get Started</Text>
        <ScrollView
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
          horizontal>
          {data?.map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={0.9}>
              <ImageBackground
                resizeMode="stretch"
                source={{uri: item.image_uri}}
                style={styles.imageBackground}>
                <Text style={styles.questionText}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#13231B" />}
    </>
  );
};

export default HomeQuestions;
