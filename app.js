import express from "express";
import { routes } from "./src/routes/index.routes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' }

const swaggerOptions = {}
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.json({
        message: "Bienvenido al servidor",
        endpoints: {
            documentation: "/api-docs",
            api: "/api"
        }
    });
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Rutas
app.use("/api", routes);

export default app;