// hooks/useTheme.ts
import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import { getColours, ThemeColours } from '@/constants/theme';

export const useTheme = (): ThemeColours => {
  // 1. Create state to store colors
  const [colours, setColors] = useState<ThemeColours>(getColours());

  // 2. Set up listener for theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(() => {
      setColors(getColours());
    });
    
    // 3. Clean up when component unmounts
    return () => subscription.remove();
  }, []); // Empty array = run once when component mounts

  // 4. Return the colors
  return colours;
};