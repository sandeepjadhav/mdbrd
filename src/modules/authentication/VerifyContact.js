import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

function VerifyContact({navigation}) {
  return (
    <View style={styles.LoginContainer}>
      <Text> Verify phone number </Text>
      <View>
        <TextInput placeholder="Country" style={styles.TextInputStyleClass} />
      </View>
      <View style={styles.loginButtonContainer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  TextInputStyleClass: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#f7f7f7',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    minWidth: '90%',
    marginBottom: '4%',
    height: 55,
  },
  loginButtonContainer: {
    minWidth: '80%',
    marginBottom: '4%',
  },
  button: {borderRadius: 50, height: 65},
});
export default VerifyContact;
