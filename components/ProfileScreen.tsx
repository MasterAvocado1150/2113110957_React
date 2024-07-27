import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from '../styles/style'
const ProfileScreen = (): React.JSX.Element => {
  const profileimage = require("../assets/Me.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileimage} style={styles.profileImg}/>
        <Text style={styles.profileName}>Minthada Lamphuttha</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;