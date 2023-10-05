import { createConnection } from 'typeorm';

createConnection().then(async connection => {
  console.log('Successfully connected to the database.');
}).catch(error => console.log('Error: ', error));
