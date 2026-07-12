import { Appearance } from 'react-native';
import { useState, useEffect } from 'react';

// Interface for theme colours types
export interface ThemeColours {
    mainBG: string;
    itemBG: string;
    textColour: string;
}

const darkColours = {
    mainBG: '#131212',
    itemBG: '#777777',
    textColour: '#ffffff',
};

const LightColours = {
  mainBG: '#ffffff',
  itemBG: '#777777',
  textColour: '#000000',
}

// Or even simpler - export as a function
export const getColours = (): ThemeColours   => {
  return Appearance.getColorScheme() === 'dark' ? darkColours : LightColours;
};

// Also export a reactive version
export const useDeviceTheme = () => {
  const [colours, setColors] = useState(getColours());
  
  useEffect(() => {
    const sub = Appearance.addChangeListener(() => {
      setColors(getColours());
    });
    return () => sub.remove();
  }, []);
  
  return colours;
};