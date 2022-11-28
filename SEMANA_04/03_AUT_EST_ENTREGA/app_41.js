
   const express = require('express'); 
   const bodyParser = require('body-parser');
   const urlencodedParser = bodyParser.urlencoded({ extended: false })

   const sqlite3 = require('sqlite3').verbose();
   const DBPATH = 'curriculo.db';

   const hostname = '127.0.0.1';
   const port = 3000;
   const app = express();

   /* Colocar toda a parte estática no frontend */
   app.use(express.static("../frontend/"));

   /* Definição dos endpoints */
   /******** CRUD ************/
   app.use(express.json());

   // Retorna todos registros (é o R do CRUD - Read)
   app.get("/Formacao", (req, res) => {
       res.statusCode = 200;
       res.setHeader('Access-Control-Allow-Origin', '*');
       var db = new sqlite3.Database(DBPATH); // Abre o banco
       var sql = "SELECT * FROM Formacao ORDER BY Data_fim COLLATE NOCASE";
           db.all(sql, [],  (err, rows ) => {
               if (err) {
                   throw err;
               }
               res.json(rows);
           });
           db.close(); // Fecha o banco
   });

   // Insere um registro (é o C do CRUD - Create)
   app.post('/insereFormacao', urlencodedParser, (req, res) => {
       res.statusCode = 200;
       res.setHeader('Access-Control-Allow-Origin', '*'); 
       var db = new sqlite3.Database(DBPATH); // Abre o banco
       sql = "INSERT INTO Formacao (Curso, Data_ini, Descricao, idPerfil, Data_Fim) VALUES ('" + req.body.Curso + "', '" + req.body.Data_ini + "', '" + req.body.Descricao + "', '"+ req.body.idPerfil + "', '" + req.body.Data_Fim + "')" ;
       console.log(sql);
       db.run(sql, [],  err => { 
           if (err) {
               throw err;
           }	
       });
       res.write('<p>Formacao INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
       db.close(); // Fecha o banco
       res.end();
   });

   // Monta o formulário para o update (é o U do CRUD - Update)
   app.get('/atualizaFormacao', (req, res) => {
       res.statusCode = 200; 
       const{idPerfil}=req.body
       res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = `SELECT * FROM Formacao WHERE idPerfil='${idPerfil}'`;
       console.log(sql);
       var db = new sqlite3.Database(DBPATH); // Abre o banco
       db.all(sql, [],  (err, rows ) => {
           if (err) {
               throw err;
           }
           res.json(rows);
       });
       db.close(); // Fecha o banco
   });

   // Exclui um registro (é o D do CRUD - Delete)
   app.get('/removeFormacao', urlencodedParser, (req, res) => {
       res.statusCode = 200;
       res.setHeader('Access-Control-Allow-Origin', '*'); 
       sql = "DELETE FROM Formacao WHERE idPerfil='" + req.query.idPerfil + "'";
       console.log(sql);
       var db = new sqlite3.Database(DBPATH); // Abre o banco
       db.run(sql, [],  err => {
           if (err) {
               throw err;
           }
           res.write('<p>Formacao REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
           res.end();
       });
       db.close(); // Fecha o banco
   });

   app.listen(port, hostname, () => {
   console.log(`Servidor rodando em http://${hostname}:${port}/`);
   });
