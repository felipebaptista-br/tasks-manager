const sql = require('./db')

sql`DROP TABLE IF EXISTS tasks`.then(() => {
    console.log('Tabela apagada com Sucesso!');
}).catch((err) => {
    console.log(err);
});
