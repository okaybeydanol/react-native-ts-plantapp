import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Api
import {useGetCategoriesQuery} from '@src/store/api/home';

// Type
import {CategoriesItemApiParams} from '@src/store/api/types';

// Constant
import {dimension, tabBarHeight} from '@src/constants/dimensions';

//Style
import styles from './style';

const HomeCategories = () => {
  const {data, isLoading} = useGetCategoriesQuery();

  const renderItem = (item: CategoriesItemApiParams, index: number) => (
    <TouchableOpacity activeOpacity={0.9} key={index} style={styles.container}>
      <ImageBackground
        style={[
          styles.imageBackground,
          {
            width: (dimension.width - 59) / 2,
          },
        ]}
        resizeMode="stretch"
        source={{uri: item.image.url}}
        key={item.id}>
        <Text style={styles.questionText}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <>
      <View
        style={[
          styles.flatListContainer,
          {
            marginBottom: tabBarHeight + 24 + 16,
          },
        ]}>
        {data?.data.map(renderItem)}
      </View>
      {isLoading && <ActivityIndicator size="large" color="#13231B" />}
    </>
  );
};

export default HomeCategories;
