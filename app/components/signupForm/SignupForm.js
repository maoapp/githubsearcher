// @vendors
import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform
} from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

const animateKeyboard = Platform.OS === 'ios' ? 'padding' : '';
const SignupForm = (
  {
    email, 
    emailIsValid,
    firstName, 
    formValid,
    githubUser,
    id,
    lastName, 
    onChangeField,
    onSubmit
  }) => (
   <KeyboardAvoidingView behavior={animateKeyboard} style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.textIntro}>Who are you?</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={text => onChangeField(text, 'firstName')}
          underlineColorAndroid="transparent"
          selectionColor="white"
          placeholder="First Name"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={text => onChangeField(text, 'lastName')}
          underlineColorAndroid="transparent"
          selectionColor="white"
          placeholder="Last Name"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={text => onChangeField(text, 'id')}
          underlineColorAndroid="transparent"
          selectionColor="white"
          placeholder="Id"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => onChangeField(text, 'email')}
          underlineColorAndroid="transparent"
          selectionColor="white"
          placeholder="Email"
          placeholderTextColor="white"
        />
        {!emailIsValid && <Text style={styles.alertMessage}>Email is not valid</Text>}
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={githubUser}
          onChangeText={text => onChangeField(text, 'githubUser')}
          underlineColorAndroid="transparent"
          selectionColor="white"
          placeholder="Github user"
          placeholderTextColor="white"
        />
      </View>
      {!formValid && <Text style={styles.infoBottom}>All fields are required</Text>}
      <TouchableOpacity 
        style={[styles.button, formValid ? styles.activateButton : styles.disabledButton]} 
        onPress={() => onSubmit()}
        disabled={!formValid}
      >
        <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>  
   </KeyboardAvoidingView> 
  
);

SignupForm.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  githubUser: PropTypes.string, 
  id: PropTypes.string,
  formValid: PropTypes.bool,  
  lastName: PropTypes.string,
  onChangeField: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SignupForm; 
        