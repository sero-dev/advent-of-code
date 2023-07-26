import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  constructor(private http: HttpClient) {}

  getInput(file: string) {
    return this.http.get(file, { responseType: 'text' });
  }
}
