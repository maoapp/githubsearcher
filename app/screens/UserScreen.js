// @vendors
import React from 'react';
import { 
  View, 
  Text,
  ImageBackground,
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import PropTypes from 'prop-types';

// @Theme
import theme from '../styles/theme';

// @Constants
import { LIMIT_REPOS } from '../constants/constants';

//@components
import Header from '../components/header/Header';
import RepoList from '../components/repoList/RepoList';

// @assets
const backgroundImage = require('../assets/jpg/home.jpeg');

class UserScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      repoName: '',
      limit: LIMIT_REPOS
    }

    this.handleLoadRepos = this.handleLoadRepos.bind(this);
    this.onSearchByName = this.onSearchByName.bind(this);
  }

  componentDidMount() {
    const { featchRepos, user } = this.props;

    featchRepos(user.githubUser);
  }

  onSearchByName(repoName) {
    this.setState({repoName: repoName.toLowerCase()});
  }

  handleLoadRepos() {
    const { limit } = this.state;

    this.setState({limit: limit + LIMIT_REPOS});
  }

  render() {
    const { limit, repoName } = this.state;
    const { repos, navigation, user  } = this.props;
    const { githubUser } = user;
    
    let content = (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={theme.blue_opacity} />
      </View>
    );

    if(repos.data) {
      const repoFilterByName = repos.data.filter(repo => repo.name.includes(repoName)).slice(0, LIMIT_REPOS);
      const reposFiltered = repoName.length > 2 ?  repoFilterByName : repos.data.slice(0, limit);
      const emptyAccount = (
        <View style={styles.centerContainer}>
          <Text style={styles.errorMessage}>The user has no repos</Text>
        </View>);

      content = repos.data.length ? (
        <RepoList handleLoadRepos={this.handleLoadRepos} user={githubUser} repos={reposFiltered}/>
      ) : emptyAccount;
    }

    if(repos.failure) {
      content = (
        <View style={styles.centerContainer}>
          <Text style={styles.errorMessage}>The user has no been found</Text>
        </View>);
    }

    return (
      <ImageBackground style={styles.background} source={backgroundImage}>
        <Header
          {...{
            navigation,
            onSearchByName: this.onSearchByName,
            repoName,
            title: "Repo Searcher", 
            user: githubUser
          }} 
        />
        <View style={styles.container} >
          {content}
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  errorMessage: {
    fontSize: 22,
    color: theme.blue_opacity
  }
});

UserScreen.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired
};

export default UserScreen; 
