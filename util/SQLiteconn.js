
import * as SQLite from 'expo-sqlite';

export function CreateSQLiteTable() {
    try{
        const db = SQLite.openDatabase('mydatabase.db');
        db.transaction((tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)'
          );
        });
        console.log('success');
      }catch(err){
        console.error(err);
      }
    
  }




