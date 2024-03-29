import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

 const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation(); 

  return (
    <View style={styles.container}>
        <Animated.View style={{opacity, transform: [{translateX: position}], ...styles.purpleBox}}></Animated.View>
        <Button title='FadeIn' onPress={ () => {fadeIn(), startMovingPosition(100)}}/>
        <Button title='FadeOut' onPress={fadeOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});