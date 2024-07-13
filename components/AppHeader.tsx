import { View, Text, StyleSheet } from "react-native";
import React from "react";

type AppHeaderProps = {
  title: string;
  title2: string;
};

const AppHeader = ({title, title2}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {title}
      </Text>

      <Text style={styles.subtitleText}>
        {title2}
      </Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});
