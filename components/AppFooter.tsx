import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/style";

type FooterProps = {
  footerMessage: string;
};

const AppFooter = ({footerMessage}:FooterProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.footer}>
      <Text style={stylesPractice.footerText} >{footerMessage}</Text>
    </View>
  );
};

export default AppFooter;
