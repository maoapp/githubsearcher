// @vendors
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

// @assets
const arrowBack = require('../../assets/png/arrow-left.png');

const Header = ({ navigation, onSearchByName, repoName, title, user }) => (
  <View style={styles.container}>
    <View style={styles.containerRow}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={arrowBack} style={styles.arrowBack}/>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <View>
        <Text style={[styles.userName]}>{user}</Text>
      </View>
    </View>
    <TextInput 
      style={styles.input}
      value={repoName}
      onChangeText={name => onSearchByName(name)}
      underlineColorAndroid="transparent"
      selectionColor="white"
      placeholder="Search By Name"
      placeholderTextColor="white"
    />
  </View>
);

Header.propTypes = {
  onSearchByName: PropTypes.func,
  repoName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Header;
