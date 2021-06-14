import express from "express";
import cors from "cors";

import restaurantRoutes from "./routes/restaurant.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurants',restaurantRoutes);
app.use('*',(req, res) => res.status(404).json({error:'page not found.'}));

export default app;
