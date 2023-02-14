import { Router } from "express";
import { jobsRoutes } from "./jobs.routes";

const routes = Router();

routes.use("/api/jobs", jobsRoutes);

export { routes };