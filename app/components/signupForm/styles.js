import { StyleSheet } from 'react-native';

// @Theme
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    borderRadius: 6,
    width: '100%', 
    paddingBottom: 30,
    justifyContent: 'center'
  },
  title: {
    marginVertical: 10,
    fontSize: 18, 
    color: theme.white,
    textAlign: 'center'
  },
  textIntro: {
    marginVertical: 10,
    color: theme.blue_primary,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  formGroup: {
    marginBottom: 15
  },
  label: {
    color: theme.blue_primary,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderColor: theme.blue_primary,
    borderWidth: 1,
    borderRadius: 30,
    color: 'white',
    fontSize: 14,
    width: '100%',
    height: 40,
    padding: 12
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 15
  },
  disabledButton: {
    backgroundColor: theme.harder_gray,
  },
  activateButton: {
    backgroundColor: theme.orange_primary
  },
  buttonText:{
    color: theme.white,
    fontSize: 14,
    fontWeight: 'bold'
  },
  infoBottom: {
    color: theme.blue_primary, 
    marginBottom: 10, 
    textAlign: 'center'
  },
  alertMessage: {
    color: theme.alert_red, 
    marginTop: 10, 
    textAlign: 'center'
  }
});

export default styles;
