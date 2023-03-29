
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

export function CreateSQLiteTable() {
    try{
        db.transaction((tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, hash TEXT)'
          );
        });
        console.log('success');
      }catch(err){
        console.error(err);
      }
    
  }


  export function CheckforConnection(){
    const hasaccount = false;
    db.transaction((tx)=>{
      tx.executeSql(`SELECT * FROM users`,(tx,results)=>{
        if(results.rows.length > 0){
          hasaccount = true;
        }
      })
    })
return hasaccount;
  }

// iserts data into table 
export function StorePrivateKeyHash(pkey){
    // TODO Hash the private key and the PIN

    try{
      db.transaction((tx)=>{
tx.executeSql(`INSERT INTO users(hash) VALUES(${pkey})`);
      });
console.log('data inserted');
    }catch(err){
      console.error(err);
    }

  }
  




