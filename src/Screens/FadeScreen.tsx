import React, {FunctionComponent, useRef} from 'react';
import {Animated, Button, Text, View} from 'react-native';
import {useFade} from '../Hooks/useFade';

interface FadeScreenProps {}

const FadeScreen: FunctionComponent<FadeScreenProps> = () => {
  const {opacity, fadeIn, fadeOut} = useFade(1000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
        }}
      />

      <Button title="fadeIn" onPress={() => fadeIn()} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
