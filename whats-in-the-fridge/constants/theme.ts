import { Appearance } from 'react-native';
import { useState, useEffect } from 'react';

// Interface for theme colours types
export interface ThemeColours {
    // Backgrounds
    mainBG: string;        // ✅ darkBG is defined here
}

const darkColours = {
    mainBG: '#131212',
    darkItemBG: '#777777',
    darkText: '#ffffff',
};

const LightColours = {
  mainBG: '#ffffff',
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