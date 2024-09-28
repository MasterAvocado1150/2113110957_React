import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, ListItem, Icon } from "@rneui/base";
import { useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState } from "../auth/auth-aliec";

const MenuScreen = ({ navigation }: any): React.JSX.Element => {

  const { profile } = useAppSelector(selectAuthState);
  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: profile? "Wellcome, " + profile.name : "thai-nichi",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
      />

      <>
        <ListItem
          bottomDivider //เส้นระหว่างเมนู
          onPress={() => {
            navigation.navigate("HomeStack");
          }}
        >
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          onPress={() => {
            navigation.navigate("ProductStack");
          }}
        >
          <Icon name="star" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;
