import { View } from "react-native";
import React, { useState } from "react";
import { Text, Card, Input, Button, Icon } from "@rneui/base";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { login } from "../services/auth-servise";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";
import { setIsLogin } from "../auth/auth-aliec";
import { useAppDispatch } from "../redux-toolkit/hooks";

const LoginScreen = (): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  //1.
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input email.")
      .email("Email format is invalid."),

    password: yup
      .string()
      .required("Please input password")
      .min(3, "Password must be at least 3 Characters."),
  });

  //2. apply with React Hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onLogin = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      if (response.status === 200) {
        dispatch(setIsLogin(true));
        Toast.show({ type: "success", text1: "Login Success!!" });
        // console.log("login success");
      }
    } catch (error: any) {
      let err: AxiosError<any> = error; //แปลงความผิดพลาดให้เป็น Axios error
      if (err.response?.status === 401) {
        Toast.show({ type: "error", text1: err.response.data.message });
        // console.log(err.response.data.message);
      } else {
        Toast.show({
          type: "info",
          text1: "เกิดข้อผิดพลาด ไม่สามารถเชื่อมต่อกับ Server ได้",
        });
        // console.log("เกิดข้อผิดพลาด ไม่สามารถเชื่อมต่อกับ Server ได้");
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h3>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 15, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              rightIcon={
                //เพิ่มไอคอนสำหรับแสดงรหัสผ่าน
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  type="feather"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              keyboardType="default"
              secureTextEntry = {!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button
          title="Log In"
          size="lg"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid}
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
