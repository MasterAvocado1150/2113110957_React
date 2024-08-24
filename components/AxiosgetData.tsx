import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

//Define types for the data structure
type User = {
    id:number;
    name: string;
    email: string;
}

const AxiosgetData = () :React.JSX.Element => {

    const [users,setusers] = useState<User[]>([]);
    const [loading,setloading] = useState<boolean>(true);
    const [error,seterror] = useState<string|null>(null);

    //Get data by axios
    const fetchData = async() =>{
        try{
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            setusers(response.data);
        }catch{
            seterror('Faild to fetch users');
        }finally{
            setloading(false);
        }

    }//end try catch

    useEffect(() =>{
        fetchData();
    },[])

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#00ced1"/>
            </View>
        );
    }

    if(error){
        <View style={styles.centered}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    }

  return (
    <FlatList
        contentContainerStyle = {styles.container}
        data={users}
        renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        )}
        keyExtractor={item=>item.id.toString()} //toStringOnly
    />
  )
}

export default AxiosgetData

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    centered: { justifyContent: "center", alignItems: "center" },
    errorText: {
      fontSize: 18,
      color: "red",
    },
    item: {
      backgroundColor: "#00ced1",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
    },
    email: {
      fontSize: 16,
    },
  });