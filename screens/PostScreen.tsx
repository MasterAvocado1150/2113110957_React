import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const PostScreen = ({ navigation, route }: any): React.JSX.Element => {
    
  const [postText, setpostText] = React.useState("");

  return (
    <>
    <TextInput
    multiline
    placeholder="Tell something...?"
    style={{height:200,padding:10,backgroundColor:'while'}}
    value={postText}
    onChangeText={setpostText}
    />
    <Button
    title="Done"
    onPress={()=>{
        navigation.navigate({
            name:'Home',
            params:{post: postText},
        });
    }}
    />

    </>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});
