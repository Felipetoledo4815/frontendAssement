import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brastlewark } from '../models/Brastlewark';

@Injectable({
  providedIn: 'root'
})
export class GnomeService {

  private url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private http: HttpClient) {}

  getGnomes() {
    return this.http.get<Brastlewark>(this.url);
  }
}
