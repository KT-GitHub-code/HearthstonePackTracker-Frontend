import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FullPackHistory} from "../models/FullPackHistory";
import {Observable, tap} from "rxjs";
import {PackType} from "../models/PackType";
import {PackHistory} from "../models/PackHistory";

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor(private http: HttpClient) { }

  fullPackHistory: FullPackHistory = null;

  packHistory: PackHistory;


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


  openLegendaryPack(packType: PackType) : Observable<any> {
    console.log("opening legendary pack: " + packType);
    return this.http.post('http://localhost:8080/api/openpackwithlegendary/' + packType, null
    )
  }


  openNonLegendaryPack(packType: PackType) : Observable<any> {
    console.log("opening non legendary pack: " + packType);
    return this.http.post('http://localhost:8080/api/openpackwithoutlegendary/' + packType, null
    )
  }

  changePackHistory(packHistory: PackHistory) {
    this.packHistory = packHistory;
  }

}
