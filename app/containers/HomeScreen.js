import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/githubRepos';

import HomeScreen from '../screens/HomeScreen';

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	null,
	mapDispatchToProps
)(HomeScreen);
