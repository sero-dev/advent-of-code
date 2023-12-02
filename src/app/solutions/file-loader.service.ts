import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileLoaderService {
  private http = inject(HttpClient);

  getInput(file: string) {
    return this.http.get(file, { responseType: 'text' });
  }
}
