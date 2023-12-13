import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoAPIFinalsSpace } from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class FinalsSpaceService {

  private apiUrl = 'https://finalspaceapi.com/api/v0/character/';

  constructor(private http: HttpClient) {}

  getFinalsInfo(): Observable<InfoAPIFinalsSpace> {
    return this.http.get<InfoAPIFinalsSpace>(this.apiUrl);
  }
}
