import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoAPIValorant } from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  private apiUrl = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) {}

  getValorantInfo(): Observable<InfoAPIValorant> {
    return this.http.get<InfoAPIValorant>(this.apiUrl);
  }
}
