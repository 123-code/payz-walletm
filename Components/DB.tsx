import React,{useState,useEffect} from "react";
import { View,StyleSheet,TouchableOpacity,Image,Clipboard,Pressable } from 'react-native'; 
import PouchDB from 'pouchdb-react-native';


export default function DB(){

    const [db,setdb] = useState("")
    const [message,setmessage] = useState("")
    const dbName = "payz";

    useEffect(() => {
        const openDatabase = async () => {
          const newDb = new PouchDB(dbName);
          setdb(newDb);
        };
        openDatabase();
      }, []);
}