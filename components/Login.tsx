import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/style";

const Login = (): React.JSX.Element => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  };

  const handleSubmit = () => {
    let erroeMessage = "";
    if (!name) {
      // Alert.alert("Error", "Please Enter Name", [{ text: "OK" }]); //if ถ้าไม่ได้พิมชื่อลงไปจะมีการแจ้งเตือน
      // return;
      erroeMessage += "Please Enter Name\n";
    }

    if (!email) {
      // Alert.alert("Error", "Please Enter Email", [{ text: "OK" }]); //if ถ้าไม่ได้พิมชื่อเมลไปจะมีการแจ้งเตือน
      // return;
      erroeMessage += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      erroeMessage += "Invalid Email Format\n";
    }

    //ตรวจรหัสผ่าน
    if (!pass) {
      // Alert.alert("Error", "Please Enter Password", [{ text: "OK" }]); //if ถ้าไม่ได้พิมชื่อเมลไปจะมีการแจ้งเตือน
      erroeMessage += "Please Enter Password\n";
    } else if (pass.length < 6) {
      erroeMessage += "Password must be at lease 6 characters\n";
      // Alert.alert("Password must be at lease 6 characters");
    }

    if (erroeMessage) {
      Alert.alert("Error", erroeMessage.trim(), [{ text: "OK" }]); //if ถ้าไม่ได้พิมชื่อและเมลไปจะมีการแจ้งเตือน
      return;
    }
    Alert.alert("Alert","Success",[{text:"OK"}]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setname}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        keyboardType="email-address"
        value={email}
        onChangeText={setemail}
      />

      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={pass}
        onChangeText={setpass}
        secureTextEntry={true}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
