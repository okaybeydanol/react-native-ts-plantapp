import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const premiumData = [
  {
    time: '1 Mount',
    desc: '$2.99/month',
    discount: 0,
    renewable: true,
  },
  {
    time: '1 Year',
    desc: 'First 3 days free, then $529,99/year',
    discount: 40,
    renewable: false,
  },
];

const PaywallPremium = () => {
  const [selectedPremiumIndex, setSelectedPremiumIndex] = useState(0);

  return premiumData.map((item, index) => (
    <LinearGradient
      key={index}
      locations={[0.6, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[
        `rgba(0, 0, 0, 0.${selectedPremiumIndex === index ? 2 : 0})`,
        `rgba(40, 175, 110, 0.${selectedPremiumIndex === index ? 1 : 0})`,
      ]}
      style={[
        styles.verticalItem,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginBottom: index !== premiumData.length - 1 ? 16 : 0,
          borderColor:
            selectedPremiumIndex === index ? '#28AF6E' : 'transparent',
        },
      ]}>
      {selectedPremiumIndex === index && item.discount > 0 && (
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>{`Save ${item.discount}%`}</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setSelectedPremiumIndex(index);
        }}
        style={styles.linearGradient}>
        <View style={styles.iconContainer}>
          {selectedPremiumIndex === index && (
            <View style={styles.selectedContainer}>
              <View style={styles.selected} />
            </View>
          )}
        </View>
        <View>
          <Text style={styles.timeText}>{item.time}</Text>
          <View style={styles.flex}>
            <Text
              style={[
                styles.descText,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  fontFamily:
                    selectedPremiumIndex === index
                      ? 'Rubik-Regular'
                      : 'Rubik-Light',
                },
              ]}>
              {item.desc}
            </Text>
            {item.renewable && (
              <Text style={styles.renewableText}>, auto renewable</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  ));
};

const styles = StyleSheet.create({
  verticalItem: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 14,
    borderWidth: 1.5,
  },
  selectedContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#28AF6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    marginRight: 12,
    overflow: 'hidden',
  },
  timeText: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    marginBottom: 2,
  },
  flex: {
    flexDirection: 'row',
  },
  descText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  renewableText: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  discountContainer: {
    position: 'absolute',
    right: -1,
    top: -1,
    width: 77,
    height: 26,
    backgroundColor: '#28AF6E',
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
  },
});

export default PaywallPremium;
