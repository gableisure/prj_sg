import { Router } from "express";
import { GetAllJobsController } from "../modules/entities/useCases/GetAllJobsController";

const jobsRoutes = Router();

const getAllJobsController = new GetAllJobsController();

jobsRoutes.get("/", getAllJobsController.handle);

export { jobsRoutes };