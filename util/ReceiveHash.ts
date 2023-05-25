import * as SQLite from 'expo-sqlite';

export async function GetPinHash(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const db = SQLite.openDatabase('pindatabase.db');
    db.transaction(
      (tx) => {
        console.log('Transaction started');
        tx.executeSql(
          'SELECT * FROM pin',
          [],
          (tx, results) => {
            console.log('SQL query executed');
            let rows = results.rows;
            console.log(`Total rows: ${rows.length}`);
            if (rows.length > 0) {
              const firstRow = rows.item(0);
              const pinHash = firstRow.pinhash; // Assuming 'pinHash' is the property name in the row
              resolve(pinHash);
            } else {
              reject('No rows found');
            }
          }
        );
      },
      (error) => {
        console.error(error);
        reject(error);
        return true;
      }
    );
  });
}
