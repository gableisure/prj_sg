import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  pathImgLogoGS = "../../../../../assets/img/logo_gs.png"
  urlGlobalSystem: string = "http://www.gsoftware.com.br/"
  jobs: any[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getAllProfessionals();
  }

  getAllProfessionals(): void {
    this.jobsService.getAllJobs().subscribe((jobs: any) => {
      this.jobs = jobs;
      this.jobs = jobs.sort((a: any, b: any) => (a.date_publication < b.date_publication ? -1 : 1));
    });
  }

  searchData(searchValue: any) {
    console.log(searchValue)
    this.jobs = this.jobs.filter((item: any) => {
      return item.title_job.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
