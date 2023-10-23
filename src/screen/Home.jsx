import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ImageComponent from '../components/ImageComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageComponent />
         <Text style={styles.heading}>Fawaidul Jiron</Text>
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('About')}>
              <Text style={styles.buttonText}>About Me</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Contact')}>
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
        </View>
         
     </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
        flexDirectionz: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#6666',
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
});