import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FullPackHistory} from "../models/FullPackHistory";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor(private http: HttpClient) { }

  fullPackHistory: FullPackHistory = null;


  getPacks(): Observable<FullPackHistory> {
    return this.http.get<FullPackHistory>('http://localhost:8080/api/fullpackhistory')
      .pipe(
        tap((data) => {
          if (data) {
            this.fullPackHistory = data;
          }
        })
      );
  }

}
