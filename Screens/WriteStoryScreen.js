import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            author: "",
            story: ""}
    }
    render() {
        return (
          <SafeAreaProvider style={styles.container}>
    
          <Header 
          centerComponent={{text: "Story Hub", style: {color:'#6495ED'}}} backgroundColor= "#F4A460">
    
          </Header>
          
          <TextInput 
          style={styles.inputBox}
          onChangeText= {(text)=>{
            this.setState({
                title: title,
            })
          }}>
        </TextInput>
        <TextInput 
          style={styles.inputBox}
          onChangeText= {(text)=>{
            this.setState({
                author: author,
            })
          }}>
        </TextInput>
    
        <TextInput 
          style={styles.inputBox}
          onChangeText= {(text)=>{
            this.setState({
                story: story,
            })
          }}>
        </TextInput>
    
    
          <TouchableOpacity style={styles.touchableOpacityStyle
          }>
                                                                            
          <Text style={styles.textStyle}>
          Submit
          </Text>
          </TouchableOpacity>
          
        </SafeAreaProvider>
        );
      }
    }
    
    const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#FFDEAD',
      },
      inputBox: {
        width: 200,
        height: 50,
        marginTop: 100,
        borderWidth: 4,
        alignSelf: 'center',
        textAlign: 'center',
        borderColor:'#4B0082',
      },
      textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#800000',
    },
    
      touchableOpacityStyle: {
        width:95,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#4B0082',
        marginTop:50,
        borderRadius: 50,
        backgroundColor: '#40E0D0'
      },
    
    });
    
    
    
    