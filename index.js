import express from 'express';
const app = express();
import { exercicio1, exercicio2, exercicio3 } from './services/exercio.js';


app.get('/exercicio1', exercicio1 )

app.get('/exercicio2/:valorHr/:qtdeHr', exercicio2)

app.get('/exercicio3/:p1/:p2/:p3/:p4/:p5', exercicio3)




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});