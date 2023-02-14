import { tb_jobs } from '@prisma/client';
import { prisma } from "../../../prisma/client";

export class GetAllJobsUseCase {
    async execute(): Promise<tb_jobs[]> {
        const jobs = await prisma.tb_jobs.findMany({
            orderBy: {
                date_publication: 'asc'
            },
        });

        return jobs;
    }
}