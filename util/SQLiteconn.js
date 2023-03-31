
import * as SQLite from 'expo-sqlite';



export const db = SQLite.openDatabase('mydatabase.db');

export async function CreateSQLiteTable() {
    try{
       db.transaction(async (tx) => {
        await tx.executeSql(
          'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, hash TEXT)'
        );
          console.log('success');
        });
       
      }catch(err){
        console.error(err);
      }
    
  }


  export async function CheckIfTableExists() {
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
            [],
            (_, { rows }) => resolve(rows),
            (_, error) => reject(error)
          );
        });
      });
  
      return result.length > 0;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  export async function CheckInsertedData() {
    try {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM users', [], (tx, results) => {
          let rows = results.rows;
          console.log(`Total rows: ${rows.length}`);
          for (let i = 0; i < rows.length; i++) {
            let { id, hash } = rows.item(i);
            console.log(`User ID: ${id}, Hash: ${hash}`);
           
          }
        });
      });
    
    } catch (err) {
      console.error(err);
      return false

    }
  }

  

  
  
  
// inserts data into table 
export async function StorePrivateKeyHash(pkey) {
  try {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO users(hash) VALUES('${pkey}')`,
          [],
          (_, result) => {
            console.log('Data inserted successfully');
            resolve(result.rowsAffected);
          },
          (_, error) => {
            console.error(error);
            reject(error);
          }
        );
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
  




