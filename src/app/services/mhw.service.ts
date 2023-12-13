import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoAPIMhw } from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class MhwService {

  private apiUrl = 'https://mhw-db.com/weapons?q={"id":{"$gte":1,"$lte":20}}';

  constructor(private http: HttpClient) {}

  getMhwInfo(): Observable<InfoAPIMhw> {
    return this.http.get<InfoAPIMhw>(this.apiUrl);
  }
}
