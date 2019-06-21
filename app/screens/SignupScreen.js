// @vendors
import React from 'react';
import { 
  AsyncStorage,
  ImageBackground, 
  Image, 
  KeyboardAvoidingView, 
  StyleSheet,
  Text, 
  TouchableOpacity, 
} from 'react-native';
import PropTypes from 'prop-types';

// @Theme
import theme from '../styles/theme';

// @components
import SignupForm from '../components/signupForm/SignupForm';

// @assets
const backgroundImage = require('../assets/jpg/home.jpeg');
const logo = require('../assets/png/logo.png');

class SignupScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        firstName: '',
        githubUser: '',
        id: '',
        lastName: ''
      },
      emailIsValid: true,
      formValid: false
    };
  
    this.onChangeField = this.onChangeField.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
    this.onStoreData = this.onStoreData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValidateEmail = this.onValidateEmail.bind(this);
    this.onValidateForm = this.onValidateForm.bind(this);
  }
  
  onChangeField(value, key) {
      const { user } = this.state;
      this.setState({ user: {...user, [key]: value }}, () => this.onValidateForm());

      if(key === 'email') {
        this.setState({ user: {...user, [key]: value }}, () => this.onValidateEmail());
      }
  }

  onValidateEmail() {
    const { user } = this.state;
    const { email } = user;
    const emailIsValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    
    this.setState({emailIsValid});
  }
 
  onValidateForm() {
    const { emailIsValid, user } = this.state;
    const { firstName, lastName, email, id, githubUser } = user;
    const validations = firstName && lastName && email && id && githubUser && emailIsValid;

    this.setState({formValid: !!validations});
  }

  onSubmit() {
    const { formValid, user } = this.state;
    const { navigation } = this.props;

    if(formValid) {
      const { signup } = this.props;

      signup(user);
      this.onStoreData(user.githubUser);
      navigation.navigate('UserScreen');
    }

    this.setState({user: {
      email: '',
      firstName: '',
      githubUser: '',
      id: '',
      lastName: ''
    }})
  }

  onLogOut() {
    const { logOut } = this.props;

    logOut();
    this.onStoreData('')
  }

  async onStoreData(user){
    try {
        await AsyncStorage.setItem('user', user);
    } catch (error) {
        // Error saving data
    }
  }

  render() {
    const { emailIsValid, formValid, user } = this.state;
    const { user: userStorage, navigation } = this.props;

    let content = (
      <SignupForm {...
        {
          ...user, 
          onChangeField: this.onChangeField,
          onSubmit: this.onSubmit, 
          navigation,
          emailIsValid, 
          formValid
        }
      }/>
    );

    if(userStorage.githubUser) {
      content = (
        <React.Fragment>
          <Text style={styles.greetingText}>! Hey {userStorage.githubUser} ¡</Text>
          <TouchableOpacity style={styles.button} onPress={this.onLogOut}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('UserScreen')}>
            <Text style={styles.buttonText}>Go to Repos</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    }

    return(
        <ImageBackground style={styles.background} source={backgroundImage}>
          <KeyboardAvoidingView style={styles.container} >
          <Image source={logo} style={styles.logoImage}/>
            {content}
          </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 30,
    backgroundColor: theme.blue_opacity
  },
  greetingText: {
    marginVertical: 10,
    color: theme.blue_primary,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  logoImage: {
    width: 50, 
    height: 50
  },
  button: {
    width: '80%',
    backgroundColor: theme.orange_primary,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 15
  },
  buttonText:{
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

SignupScreen.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
};

export default SignupScreen;
