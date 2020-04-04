import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Interests({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Interests</Text>
      <Button
        title="Make Friends"
        onPress={() => navigation.navigate('BirthDate')}
      />
      <Button
        title="Find new job"
        onPress={() => navigation.navigate('BirthDate')}
      />
      <Button title="Chat" onPress={() => navigation.navigate('BirthDate')} />
      <Button
        title="Learning"
        onPress={() => navigation.navigate('BirthDate')}
      />
      <Button
        title="Education"
        onPress={() => navigation.navigate('BirthDate')}
      />
      <Button
        title="Networking"
        onPress={() => navigation.navigate('BirthDate')}
      />

      <Button
        title="BirthDate"
        onPress={() => navigation.navigate('BirthDate')}
      />
    </View>
  );
}
export default Interests;
