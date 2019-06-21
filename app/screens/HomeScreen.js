// @vendors
import React from 'react';
import { 
  AsyncStorage, 
  ImageBackground, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  View
 } from 'react-native';
import PropTypes from 'prop-types';

// @Theme
import theme from '../styles/theme';

// @assets
const backgroundImage = require('../assets/jpg/home.jpeg');

class HomeScreen extends React.Component{
  componentWillMount() {
    this.onGetStoreData();
  }

  async onGetStoreData() {
    const { navigation, signup } = this.props;
    const userStored = await AsyncStorage.getItem('user')

    if (userStored !== null) {
        const user = {};
        user.githubUser = userStored;

        signup(user);
        navigation.navigate('SignupScreen');
    }
  }

  render() {
    const { navigation } = this.props;

    return(
      <ImageBackground style={styles.background} source={backgroundImage}>
        <View style={styles.containerBackground}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>GITSEARCHER</Text>
        </View>
          <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
};
 
const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: theme.gray_opacity,
    display: 'flex',
    flex: 1,
  },
  containerButton: {
    justifyContent:'flex-end',
    alignItems: 'center',
    backgroundColor: theme.gray_opacity_light, 
    padding: 15
  },
  containerTitle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  title: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    letterSpacing: 5
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  buttonText: {
    color: theme.blue_primary, 
    fontSize: 16, 
    fontWeight: 'bold', 
    letterSpacing: 2
  },
  logo: {
    fontSize: 20,
    color: theme.white
  }
});

HomeScreen.propTypes = {
  signup: PropTypes.func
};

export default HomeScreen;
