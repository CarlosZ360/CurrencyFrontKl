import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { 

  }
  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto>{
    return this.http.get<any>("${environment.BACKEND_URL}/api/currency/exchange?from="
     + from + "&to=" + to + "&amount=" + amount);
  }
}                          
