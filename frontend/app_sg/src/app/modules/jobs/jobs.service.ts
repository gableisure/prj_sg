import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = `${environment.baseUrlApi}/jobs`;

  constructor(private http: HttpClient) { }

  getAllJobs = (): Observable<any> => this.http.get<any>(this.baseUrl);

}
