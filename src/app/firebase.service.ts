import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  url="https://second-test-449fb-default-rtdb.firebaseio.com/"
  constructor(private http: HttpClient) { }

  public getAllWallets():Observable<any>{
    return this.http.get(`${this.url}wallets.json`)
  }

  public getAllTrans():Observable<any>{
    return this.http.get(`${this.url}transactions.json`)
  }
  public delete(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}/transactions/${id}.json`);
  }
  public patch(id: string, body: any): Observable<any>{
    return this.http.patch(
      `${this.url}/wallets/${id}.json`,
      body);
  }
}