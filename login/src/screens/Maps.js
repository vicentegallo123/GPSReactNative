import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Button, PermissionsAndroid, Platform, Animated, Alert, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

const App = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 20.70271,
    longitude: -103.47386,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [vehicleLocation, setVehicleLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const mapView = useRef(null);
  const buttonOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permiso de localización",
            message: "Se necesita permiso de su dispositivo para acceder a la localización.",
            buttonNeutral: "Preguntar más tarde",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );
      } catch (err) {
        console.warn(err);
      }
    } else {
      try {
        await Geolocation.requestAuthorization('whenInUse');
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getVehicleLocation = async () => {
    const vehicleCoords = {
      latitude: 20.70272,
    longitude: -103.47386,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    };
    setVehicleLocation(vehicleCoords);
    setRoute({
      origin: location,
      destination: vehicleCoords,
      apikey: "AIzaSyCrU7o_SkPiGvPhIiXudijSmSwukM1reJo",
    });
    setShowRoute(true);
  };

  const handleMapPress = () => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const zoomIn = () => {
    mapView.current.animateToRegion({
      ...location,
      latitudeDelta: location.latitudeDelta / 2,
      longitudeDelta: location.longitudeDelta / 2,
    }, 500);
  };

  const zoomOut = () => {
    mapView.current.animateToRegion({
      ...location,
      latitudeDelta: location.latitudeDelta * 2,
      longitudeDelta: location.longitudeDelta * 2,
    }, 500);
  };

  const clearRoute = () => {
    setShowRoute(false);
    setRoute(null);
    setVehicleLocation(null);
  };

  const goToLocation = () => {
    if (mapView.current) {
      mapView.current.animateToRegion({
        ...location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapView}
        style={styles.map}
        initialRegion={location}
        showsUserLocation={true}
        onPress={handleMapPress}
      >
        {vehicleLocation && (
          <Marker
            coordinate={vehicleLocation}
            title={"Ubicación del Vehículo"}
            description={"Vehículo localizado aquí"}
            pinColor="blue"
          />
        )}
        {showRoute && route && (
          <MapViewDirections
            origin={route.origin}
            destination={route.destination}
            apikey={route.apikey}
            strokeWidth={5}
            strokeColor="hotpink"
            onError={error => {
              console.log("MapViewDirections error: ", error);
              Alert.alert("Error", "Error al trazar la ruta: " + error.message);
            }}
            onReady={result => {
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }
              });
            }}
          />
        )}
        <Marker
          coordinate={location}
          title={"Usted está aquí"}
          description={"Ubicación actual"}
          pinColor="red"
        />
      </MapView>
      <Animated.View style={[styles.buttonContainer, { opacity: buttonOpacity }]}>
        <View style={styles.button}>
          <Button title="Buscar Vehículo" onPress={getVehicleLocation} />
        </View>
      </Animated.View>
      <View style={styles.zoomButtonContainer}>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
          <Text style={styles.zoomButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
          <Text style={styles.zoomButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={clearRoute}>
          <Text style={styles.zoomButtonText}>✕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={goToLocation}>
          <Text style={styles.zoomButtonText}>⌂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={() => navigation.goBack()}>
          <Text style={styles.zoomButtonText}>↩︎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  zoomButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    padding: 10,
  },
  zoomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
  },
  zoomButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
