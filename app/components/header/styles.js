// @vendors
import { StyleSheet } from 'react-native';

// @Theme
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 80,
    marginTop: 10,
    backgroundColor: theme.blue_opacity
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowBack: {
    width: 20,
    height: 20
  },
  input: {
    marginTop: 5,
    color: theme.white,
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderColor: theme.white,
    paddingVertical: 5,
  },
  text: {
    color: theme.white,
    fontWeight: 'bold'
  },
  userName: {
    color: theme.white,
    fontSize: 12
  }
});

export default styles;
