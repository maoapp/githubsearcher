import { StyleSheet } from 'react-native';

// @THEME
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerCard: {
    flexDirection: 'row'
  },
  containerCards: {
    flex: 1, 
    paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderBottomColor: theme.sticker_grey, 
    borderBottomWidth: 1 
  },
  bold: {
    fontWeight: 'bold'
  },
  regularText: {
    fontSize: 14
  },
  repoTitle: {
    color: theme.blue_primary,
    fontWeight: 'bold',
    width: '80%',
    fontSize: 16
  },
  emptyInfo: {
    color: theme.alert_red,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  link: {
    color: theme.blue_link
  },
  linkContainer: {
    width: '80%'
  }
});

export default styles;




