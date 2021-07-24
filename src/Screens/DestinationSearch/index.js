import React, {useState} from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
const index = () => {
  const [formText, setFormText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textiInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyDkCKN1YdEsqAeiJkSZX1wb7CcMB-AVW-k',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textiInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyDkCKN1YdEsqAeiJkSZX1wb7CcMB-AVW-k',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default index;
