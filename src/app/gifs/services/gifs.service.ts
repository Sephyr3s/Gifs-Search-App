import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class GifsService {

  public gifsList: Gifs[] = [];

  private _tagsHistory:  string[] = [];
  private apiKey:        string= 'sgy7o2uc329Toqu5CscFatoAgIRicdCB';
  private serviceUrl:    string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {

    this.loadLocalStorage();

  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const temporal = localStorage.getItem('history');
    if (temporal) {
      this._tagsHistory = JSON.parse(temporal);
    }
    if(this._tagsHistory.length === 0) return;
      this.searchTag(this._tagsHistory[0]);  // Load first tag from history on app start  // TODO: Use debounce or throttle to avoid unnecessary API calls.  // TODO: Add more features like sorting, filtering, etc.  // TODO: Add error handling for API failures.  // TODO: Add pagination support.  // TODO: Add unit tests.  // TODO: Add integration tests.  // TODO: Add user authentication and authorization.  // TODO: Add more advanced features like gifs sharing, saving, etc.  // TODO: Add more advanced features like gifs searching by trending, recent, etc.  // TODO: Add more advanced features like gifs searching by user, etc.  // TODO: Add more advanced features like gifs searching by location, etc.  // TODO: Add more advanced features like gifs searching by tag, etc.  // TODO: Add more advanced features like gifs searching by date, etc.

  }


  get tagsHistory(){
    return [... this._tagsHistory];
  }


   searchTag (tag: string) : void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', tag);

    this.http.get<SearchResponse>(` ${this.serviceUrl}/search`, {params})
    .subscribe( (resp)=>{
      this.gifsList = resp.data;
      //console.log({gifs: this.gifsList});

    })

  }

}
