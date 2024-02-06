import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient: HttpClient) { }

  getJobs(){
    var url = `${BASE_URL}jobs`
    return this.httpClient.get<any[]>(url)
  }

}
