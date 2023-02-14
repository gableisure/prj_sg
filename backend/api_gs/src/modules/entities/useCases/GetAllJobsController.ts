import { Request, Response } from "express";
import { GetAllJobsUseCase } from "./GetAllJobsUseCase";

export class GetAllJobsController {
    async handle(req: Request, res: Response) {
        const getAllJobsUseCase = new GetAllJobsUseCase();

        const jobs = await getAllJobsUseCase.execute();

        res.status(200).json(jobs);
    }
}