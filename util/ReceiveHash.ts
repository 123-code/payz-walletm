import * as SQLite from 'expo-sqlite';

export async function GetPinHash(pin: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const db = SQLite.openDatabase('pindatabase.db');
    db.transaction((tx) => {
      console.log('Transaction started');
      tx.executeSql(
        'SELECT * FROM pin',
        [],
        (tx, results) => {
          console.log('SQL query executed');
          let rows = results.rows;
          console.log(`Total rows: ${rows.length}`);
          console.log(`First row: ${JSON.stringify(rows.item(rows.length - 1))}`);
          resolve(rows.toString()); 
        },
        (tx, error) => {
          console.error(error);
          reject(error);
          return true; 
        }
      );
    });
  });
}
