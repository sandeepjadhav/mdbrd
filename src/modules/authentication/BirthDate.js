import * as React from 'react';
import {View, Text, Button} from 'react-native';

function BirthDate({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Birthdate</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate('SubscriptionPackage')}
      />
    </View>
  );
}
export default BirthDate;
