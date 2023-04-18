const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', // ชื่อโฮสต์
  user: 'onetrave_onetravel', // ชื่อผู้ใช้งานฐานข้อมูล
  password: '29022543', // รหัสผ่านของผู้ใช้งานฐานข้อมูล
  database: 'onetrave_onetravel' // ชื่อฐานข้อมูล
});

// เชื่อมต่อกับฐานข้อมูล
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// ใช้งานฐานข้อมูล
db.query('SELECT * FROM anime', (err, results) => {
  if (err) throw err;
  console.log(results);
});

// ปิดการเชื่อมต่อฐานข้อมูล
db.end((err) => {
  if (err) throw err;
  console.log('Database connection closed');
});
