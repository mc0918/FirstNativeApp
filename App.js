import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import Weather from "./components/Weather";

import weatherKey from "./Config";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: "error getting weather conditions"
        });
      }
    );
  }

  fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${
        weatherKey.KEY
      }&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    const { isLoadingComplete } = this.state;
    return (
      <View style={styles.container}>
        {isLoadingComplete ? (
          <Text>Fetching Weather</Text>
        ) : (
          <View>
            <Weather />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
