import * as React from 'react';
import {  View, StyleSheet, Animated, Button, Text, Touchable } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


export default ()=> {
  const [isPlaying, setIsPlaying] = React.useState(true)
  
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
       initialRemainingTime={13}
        isPlaying={isPlaying}
        duration={10}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}
        onComplete={() => [true]}
    >
      {({ remainingTime, animatedColor }) => (
        <View>
          <Text>aqui</Text>

       <Animated.Text style={{ color: animatedColor, fontSize: 100 }}>
          
            {remainingTime}
           
        </Animated.Text>

  
         <Text>aqui</Text>
    <Button title="Clique " onPress={() => setIsPlaying(prev => !prev)}/>
          
        </View>
      )}
      
    </CountdownCircleTimer>
    
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
   