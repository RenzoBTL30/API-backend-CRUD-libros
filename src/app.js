import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import editorialRoutes from './routes/editorial.routes'
import libroRoutes from './routes/libro.routes'

const app = express();
app.use(express.json());
app.set('pkg',pkg);

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.json({
        name:app.get('pkg').name,
        autor:app.get('pkg').author,
        version:app.get('pkg').version
    })
})
app.use('/editorial',editorialRoutes);
app.use('/libro',libroRoutes);


export default app;