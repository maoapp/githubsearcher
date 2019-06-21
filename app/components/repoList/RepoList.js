// @vendors
import React from 'react';
import { TouchableOpacity, FlatList, View, Text, Linking } from 'react-native'
import PropTypes from 'prop-types';

import { LIMIT_REPOS } from '../../constants/constants';

// @styles
import styles from './styles';

const renderCard = repos => {
  const { 
    description, 
    default_branch, 
    html_url,
    language, 
    name 
  } = repos;

  return(
    <View style={styles.containerCards}>
      <View style={[styles.containerCard]}>   
        <Text style={[styles.repoTitle]}>{name.toUpperCase()}</Text> 
      </View>
      <View style={[styles.containerCard]}>   
        <Text style={[styles.regularText]}>{description || 'no description'}</Text> 
      </View>
      <View style={styles.containerCard}>
        <Text style={[styles.regularText, styles.bold]}>Language: </Text>     
        <Text style={styles.regularText}>{language}</Text> 
      </View>
      <View style={styles.containerCard}>
        <Text style={[styles.regularText, styles.bold]}>Default Branch: </Text>     
        <Text style={styles.regularText}>{default_branch}</Text> 
      </View>
      <View style={[styles.containerCard, styles.linkContainer]}>
        <Text style={[styles.regularText, styles.bold]}>Link: </Text>     
        <TouchableOpacity onPress={() => Linking.openURL(`${html_url}`)}>
          <Text numberOfLines={1} style={styles.link}>
            {html_url}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const RepoList = ({ repos, handleLoadRepos }) => (
  <React.Fragment>
    <FlatList 
      style={styles.container}
      data={repos}
      renderItem={({item}) => renderCard(item)}
      keyExtractor={(item, index) => `${item.name}${index}`}
      onEndReached={handleLoadRepos}
      onEndReachedThreshold={0.1}
      initialNumToRender={LIMIT_REPOS}
    />
  </React.Fragment>
);

RepoList.propTypes = {
	repos: PropTypes.array
};

export default RepoList;
