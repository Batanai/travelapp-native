import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Location from "./components/Location";
import Photos from "./components/Photos";
import { gs, colors } from "../../styles";

export default function Profile() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          "https://randomuser.me/api/?inc=name,picture,location&noinfo"
        );
        let users = await res.json();

        setUser(users.results[0]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={[gs.center, styles.container]}>
          <StatusBar barStyle="light-content" />

          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header user={user} />
          <Stats />
          <About />
          <Location />
          <Photos />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});
