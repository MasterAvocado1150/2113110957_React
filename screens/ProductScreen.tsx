import { View, Text, FlatList, ListRenderItem, ActivityIndicator } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { ListItem, Avatar } from "@rneui/themed";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../services/product-service";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = () => {
  const navigation = useNavigation<any>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "สินค้า",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  // --------------------------------------------------------------------------------------------------------------------------

  const [data, setdata] = useState<any[]>([]);
  const [loading,setLoading] = useState<boolean>(false); 

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      // console.log(response.data.data)  แสดงแบบterminal
      setdata(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally{
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  if (loading) {
    <ActivityIndicator size='large' color='pink'/>
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem 
        bottomDivider
        onPress={()=> {
          navigation.navigate("Detail",{
            id: item.id,
            title: item.title,
          });
        }}
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success"/>
        </ListItem>
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async()=>{await getProduct();}}
        refreshing= {loading}
      />
    </View>
  );
};

export default ProductScreen;
