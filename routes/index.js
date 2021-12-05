var express = require('express');
var router = express.Router();

const mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/alarmList', function (req,res,next){

  var returnRes = null;

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'shguswls12',
    database : 'eaproject'
  });
  
  connection.connect();
  var sql = 'select  al_time,k.a_id, al_id, al_cctv_num, a_name, a_type, a_name_eng '
  +'from alarmhist k join animal j on k.a_id = j.a_id '
  +'order by al_time desc '
  connection.query(sql , (error, rows, fields) => {
    if (error) throw error;

    res.send(rows);
    
  });
  
  connection.end();

});
router.get('/alarmChart', function (req,res,next){

  var returnRes = null;

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'shguswls12',
    database : 'eaproject'
  });
  
  connection.connect();
  var sql = 'select a_name, count(k.a_id) as cnt '
          +'from alarmhist k join animal j on k.a_id = j.a_id '
          +'group by k.a_id '
          +'order by count(k.a_id) desc ';

  connection.query(sql , (error, rows, fields) => {
    if (error) throw error;

    res.send(rows);
    
  });
  
  connection.end();

});


module.exports = router;
