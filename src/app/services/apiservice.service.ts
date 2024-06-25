import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap, throwError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }
  offlineMessage: string = 'Ooops! You are not connected internet. Please check.';
 

 API_URL = 'https://countriesnow.space/api/v0.1'
   // Response mapper
   private responseMapper(res: Response) {
    // console.log(res.status)
    // localStorage.setItem('status-code', res.status.toString());

    let resObj: any = res;
    return resObj || {};
  }

  // GET API
  getAPI(cPath:any): Observable<any> {
    let httpOptions = {}
    
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    if (navigator.onLine) {
      return this.http.get(this.API_URL + cPath, httpOptions).pipe(
        timeout(30000),
        map(this.responseMapper)
      );
    } else {
      window.alert(this.offlineMessage);
      return throwError('You are offline');
    }
  }

  // POST API
  postAPI(cPath, bodyObj): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': ''
      // observe: 'response', // Include the full HTTP response
        
      })
      // observe: 'response' as 'body'

    };
    if (navigator.onLine) {
      return this.http.post<any>(this.API_URL + cPath, bodyObj, httpOptions).pipe(
        timeout(30000),
        tap((data) => {
        }),
        map(this.responseMapper),
      );
    } else {
      window.alert(this.offlineMessage);
    }
  }

  // PATCH API
  patchAPI(cPath, bodyObj): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.sessionService.getItemFromSession(Resources.SessionStorageKeys.CurrentUser)?.token
      })
    };
    if (navigator.onLine) {
      return this.http.patch<any>(this.API_URL + cPath, bodyObj, httpOptions).pipe(
        timeout(30000),
        tap((data) => {
        }),
        map(this.responseMapper),
      );
    } else {
      window.alert(this.offlineMessage);
    }
  }

  // DELETE API
  deleteAPI(cPath): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.sessionService.getItemFromSession(Resources.SessionStorageKeys.CurrentUser)?.token
      })
    };
    if (navigator.onLine) {
      return this.http.delete<any>(this.API_URL + cPath, httpOptions);
    } else {
      window.alert(this.offlineMessage);
    }
  }

}
