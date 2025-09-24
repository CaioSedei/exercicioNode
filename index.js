import express from 'express';
const app = express();
app.use(express.json());
import { exercicio1Get, exercicio1Post, exercicio2} from './controller/exercio.js';



app.get('/exercicio1', exercicio1Get)
app.post('/exercicio1', exercicio1Post)


app.get('/exercicio2/:valorHr/:qtdeHr', exercicio2)




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

