import React, {FunctionComponent, useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientConext';
import {useFade} from '../Hooks/useFade';

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground: FunctionComponent<GradientBackgroundProps> = ({
  children,
}: GradientBackgroundProps) => {
  const {colors, prevColors, setPrevColorsFun} = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade(300);

  useEffect(() => {
    fadeIn(() => {
      setPrevColorsFun(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.8}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.8}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
