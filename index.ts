import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router  from './routes/router';
import bodyParser from "body-parser";
import cors from 'cors'

const server = new Server();


//Bodyparser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
server.app.use('/', router);


server.app.use(cors({origin: true, credentials:true}));

server.start(()=>{
    console.log(`Servidor Corriendo en el puerto ${SERVER_PORT}`)
})