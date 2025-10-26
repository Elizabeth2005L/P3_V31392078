import express from "express";
import { routes } from "./src/routes/index.routes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' }

const swaggerOptions = {}
const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Bienvenido al servidor",
  });
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))

app.use("/api",routes)

export default app

