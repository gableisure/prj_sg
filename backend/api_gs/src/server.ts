import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import { routes } from './routes';
import { AppErrors } from './errors/AppErrors';

const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

dotenv.config();

const app = express();

app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(cors());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppErrors) {
         return res.status(err.statusCode).json({
             status: "error",
             message: err.message
         });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

app.get("/", (req: Request, res: Response) => res.send("API is running"));

app.listen(process.env.PORT || 3335, () => console.log("Server is running in port " + process.env.PORT || 3335));

