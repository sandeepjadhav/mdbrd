import * as React from 'react';
import {View, Text, Button} from 'react-native';

function UploadPhoto({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>UploadPhoto</Text>
     
      <Button
        title="Interests"
        onPress={() => navigation.navigate('Interests')}
      />
      <View>
        <Text onPress={() => navigation.navigate('Interests')}>
          Skip for now
        </Text>
      </View>
    </View>
  );
}
export default UploadPhoto;
