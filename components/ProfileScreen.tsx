import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/style";
const ProfileScreen = (): React.JSX.Element => {
  const profileimage = require("../assets/ProfilePic.jpg");
  const profile2 = require("../assets/ProfilePic2.jpg");
  const [name, setName] = useState("Minthada Lamphuttha");
  const [image, setImage] = useState(profileimage);

  const handleChangeName = () => {
    setName(name == "Minthada Lamphuttha" ? "New Name" : "Minthada Lamphuttha");
  };
  const changeImg = () => {
    setImage(image == profileimage ? profile2 : profileimage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.profileImg} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button onPress={handleChangeName} title="Change Name"></Button>
          <View style={styles.btmargin}>
            <Button onPress={changeImg} title="Change Image"></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
