const sql = require('./db')

sql`
CREATE TABLE tasks (
    id          TEXT PRIMARY KEY,
    activated   BOOLEAN,
    description TEXT
);
`.then(() => {
    console.log('tabela criada');
})