const express = require('express');
const db = require('./utils/database');
const Todo = require('./models/todos.model')
const todoRoutes = require('./routes/todo.routes')


const PORT = 8005;

Todo;

db.authenticate()
.then(()=>{
    console.log('Conecxion exitosa')
})
.catch(
    (error)=>{
        console.log(error);
    });

db.sync()
.then(()=>{
    console.log('base de datos sincronizada');

})
.catch((error)=>{
    console.log(error);
})

const app = express();

app.use(express.json());

app.use(todoRoutes)


app.get('/', (req, res)=>{
    res.send('bienvenido a mi servidor')
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo el el puerto ${PORT}`);
});
