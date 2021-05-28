import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, publishReplay, refCount } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})

export class BankhttpService {

  public a1 = [];
  private baseUrl = "https://vast-shore-74260.herokuapp.com/banks";
  public city1 = "BANGALORE"
  public city2 = "MUMBAI"
  public city3 = "DELHI"
  public city4 = "CHENNAI"
  public city5 = "HYDERABAD"

  // Cached banks data
  hyderabadBanks: Observable<BankModel[]>;
  delhiBanks: Observable<BankModel[]>;
  chennaiBanks: Observable<BankModel[]>;
  bangloreBanks: Observable<BankModel[]>;
  mumbaiBanks: Observable<BankModel[]>;


  constructor(private _http: HttpClient) {
    console.log('Bank http service called');
    this.clearCache();
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getBangaloreBranches(): Observable<any> {

    /*let myResponse = this._http.get(this.baseUrl + '?city=' + this.city1);
    //console.log(myResponse);
    return myResponse;*/
    if (!this.bangloreBanks) { // checking is hyderabad bank data cached.
      this.bangloreBanks = this._http.get<BankModel[]>(this.baseUrl + '?city=' + this.city1)
        .pipe(
          map(data => data),
          publishReplay(1),
          refCount(),
        );
    }
    return this.bangloreBanks;
  }

  public getMumbaiBranches(): Observable<any> {

    /*let myResponse = this._http.get(this.baseUrl + '?city=' + this.city2);
    //console.log(myResponse);
    return myResponse;*/
    if (!this.mumbaiBanks) {
      this.mumbaiBanks = this._http.get<BankModel[]>(this.baseUrl + '?city=' + this.city2)
        .pipe(
          map(data => data),
          publishReplay(1),
          refCount(),
        );
    }
    return this.mumbaiBanks;
  }


  public getDelhiBranches(): Observable<any> {

    /*let myResponse = this._http.get(this.baseUrl + '?city=' + this.city3);
    //console.log(myResponse);
    return myResponse;*/
    if (!this.delhiBanks) {
      this.delhiBanks = this._http.get<BankModel[]>(this.baseUrl + '?city=' + this.city3)
        .pipe(
          map(data => data),
          publishReplay(1),
          refCount(),
        );
    }
    return this.delhiBanks;
  }

  public getChennaiBranches(): Observable<any> {

    /*let myResponse = this._http.get(this.baseUrl + '?city=' + this.city4);
    //console.log(myResponse);
    return myResponse;*/
    if (!this.chennaiBanks) {
      this.chennaiBanks = this._http.get<BankModel[]>(this.baseUrl + '?city=' + this.city4)
        .pipe(
          map(data => data),
          publishReplay(1),
          refCount(),
        );
    }
    return this.chennaiBanks;
  }

  public getHyderabadBranches(): Observable<any> {

    /*let myResponse = this._http.get(this.baseUrl + '?city=' + this.city5);
    //console.log(myResponse);
    return myResponse;*/
    if (!this.hyderabadBanks) {
      this.hyderabadBanks = this._http.get<BankModel[]>(this.baseUrl + '?city=' + this.city5)
        .pipe(
          map(data => data),
          publishReplay(1),
          refCount(),
        );
    }
    return this.hyderabadBanks;

  }


  // Clear cache of banks on interval or some button click.
  clearCache() {
    setInterval(() => {
      console.log('Clearing cache');
      this.delhiBanks = null;
      this.chennaiBanks = null;
      this.hyderabadBanks = null;
      this.bangloreBanks = null;
      this.mumbaiBanks = null;
    }, 100000 * 30); // clearing cache after 30min.
  }
}


