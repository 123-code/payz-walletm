import * as SQLite from 'expo-sqlite';
export async function GetPinHash(pin: any) {
    const db = SQLite.openDatabase('pindatabase.db');
       try{
        db.transaction((tx) => {
          console.log('Transaction started');
          tx.executeSql('SELECT * FROM pin', [], (tx, results) => {
            console.log('SQL query executed');
            let rows = results.rows;
            console.log(`Total rows: ${rows.length}`);
            return rows;
          }
          );
        });
       }catch(err){
            console.error(err)
       }
      }