import React from 'react';
import { View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const App = () => (
   <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsMyLocationButton
         showsUserLocation
         region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
      />
   </View>
);

export default App;