import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from './Screens/ReadStoryScreen';
import WriteStory from './Screens/WriteStoryScreen';


export default function App() {
  return (
  <AppContainer>

  </AppContainer>
  );
}
const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStory},
  WriteStory: {screen: WriteStory},
},
{
    defaultNavigationOptions: ({
      navigation
    })=>(
    {
      tabBarIcon: ()=>{ 
        const routename = navigation.state.routeName
        if(routename== "ReadStory"){
          return(
            <Image source= {require("./assets/facebook.png")} style={{width: 40, height: 40}}></Image> 
          )
        }
        else if(routename== "Ins"){
          return(
            <Image source= {require("./assets/instagram.png")} style={{width: 40, height: 40}}></Image> 
          )
        }
      }
    }
    )
}
)

const AppContainer = createAppContainer(
  TabNavigator
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
