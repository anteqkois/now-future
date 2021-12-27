// import modules and package
import express from 'express';
import jwt from 'jsonwebtoken';
import { join } from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

//import routes
import authRoutes from './routes/authRouter.js';
import postRoutes from './routes/postRouter.js';
import commentRoutes from './routes/commentRouter.js';
import categoryRoutes from './routes/categoryRouter.js';

//import middlewares
import { notFound, catchErrors } from './middlewares/errors.js';

const app = express();

// database setting/connection
import database from './config/database.js';

app.set('port', process.env.PORT || 8080);

//Add helmet middlewares, express-rate-limit
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/comments', commentRoutes);
app.use('/api/v1/categories', categoryRoutes);

if (process.env.MODULE === 'production') {
    app.use(express.static(join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, 'client/build', 'index.html'));
    });
}
//handling errors
app.use(notFound);
app.use(catchErrors);

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});
