import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
      <View style={{ width: screenDimensions.width, height: screenDimensions.height / 2, backgroundColor: 'pink' }}/>
    </View>
  );
};

export default MyComponent;