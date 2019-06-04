import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const { isLoadingComplete } = this.state;
    return (
      <View style={styles.container}>
        {isLoadingComplete ? (
          <Text>Fetching Weather</Text>
        ) : (
          <View>
            <Text>Minimalist Weather App</Text>
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
