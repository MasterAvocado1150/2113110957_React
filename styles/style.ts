import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#7fff00", // burlywood color
  },
  profileImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
    marginTop: 20,
    shadowColor: "#006400",
  },
  profileName: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#006400",
    fontStyle: "italic",
  },
  btmargin: {
    marginTop: 30,
  },
});

const stylesPractice = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
    },    

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


  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20
  },

  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 8,
    alignItems: "center"
    }    
});

const stylesLogin = StyleSheet.create({
  container: {
  justifyContent: "center",
  padding: 20,
  marginTop: 50,
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
  borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
  elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
  width: '90%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
  },
  input: {
  height: 45, // เพิ่มความสูงของ TextInput
  borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
  borderWidth: 1,
  borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
  marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
  paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
  backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
  },
  });

export {stylesPractice, stylesLogin};
