import express from 'express';
const app = express();
app.use(express.json());
import { exercicio1, exercicio2} from './controller/exercio.js';



app.post('/exercicio1', exercicio1)


app.post('/exercicio2', exercicio2)




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

