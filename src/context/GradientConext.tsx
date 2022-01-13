import React, {createContext, useState} from 'react';
import ImageColors from 'react-native-image-colors';

interface ImagePrimaryColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImagePrimaryColors;
  prevColors: ImagePrimaryColors;
  setColorsFun: (colors: ImagePrimaryColors) => void;
  setPrevColorsFun: (colors: ImagePrimaryColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //TODO:  definir tipo

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImagePrimaryColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImagePrimaryColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setColorsFun = (colors: ImagePrimaryColors) => {
    setColors(colors);
  };

  const setPrevColorsFun = (colors: ImagePrimaryColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{colors, prevColors, setColorsFun, setPrevColorsFun}}>
      {children}
    </GradientContext.Provider>
  );
};
