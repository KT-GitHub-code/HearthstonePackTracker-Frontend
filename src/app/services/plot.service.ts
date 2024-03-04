import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PackType} from "../models/PackType";

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  private baseURL = 'http://localhost:8080/api/plot/';

  constructor(
    private http: HttpClient
  ) {}

  getImage(packType: PackType): Observable<Blob> {
    const imageUrl = this.baseURL + packType;
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

}
