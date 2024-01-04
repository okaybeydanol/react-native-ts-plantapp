import {dimension} from '@src/constants/dimensions';
import {PixelRatio} from 'react-native';

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(() => resolve({}), timeout));
};

const pixelDensity: number = PixelRatio.get();

// Recalculates the entered number according to the screen Inches
export const toScale = (number: number): number => {
  const ratio = (metricsNumber() + pixelDensity) / 10;
  const value = number * Number(ratio.toFixed(1));
  return Number(value.toFixed(1));
};
const metricsNumber = (): number => {
  const density = pixelDensity * 160;
  const x = Math.pow((dimension.width * pixelDensity) / density, 2);
  const y = Math.pow((dimension.height * pixelDensity) / density, 2);
  const screenInches = Math.sqrt(x + y) + 1.6;
  return screenInches;
};

// SLUGIFY
export const slugify = (text: string) => {
  let trMap: {[key: string]: string} = {
    '\u00E7': 'c', // ç
    '\u00C7': 'c', // Ç
    '\u011F': 'g', // ğ
    '\u011E': 'g', // Ğ
    '\u015F': 's', // ş
    '\u015E': 's', // Ş
    '\u00FC': 'u', // ü
    '\u00DC': 'u', // Ü
    '\u0131': 'i', // ı
    '\u0130': 'i', // İ
    '\u00F6': 'o', // ö
    '\u00D6': 'o', // Ö
  };

  for (let key in trMap) {
    text = text.replace(new RegExp(key, 'g'), trMap[key]);
  }
  return text
    .trim()
    .replace(/[^-a-zA-Z0-9\s]+/gi, '')
    .replace(/\s/gi, '-')
    .replace(/-+/gi, '-')
    .toLowerCase();
};

export const firstLetterUppercase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
