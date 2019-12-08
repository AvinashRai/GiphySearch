import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private httpClient: HttpClient) { }
  searchimg(searchTerm) {

    const params = new HttpParams()
      .set('q', searchTerm.value);
    return this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=BWqy9E5FPTPER7s0rDesYBQCoYtWtbnY&limit=25&offset=0&rating=G&lang=en', { params })




  }
}
