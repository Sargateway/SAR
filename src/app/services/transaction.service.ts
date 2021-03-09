import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer';
import { TransactionModel } from '../models/transaction';
@Injectable()
export class TransactionService {
    constructor(private http: HttpClient) { }
    url: string = '';
    createTransaction(transactionData: TransactionModel) {
        return this.http.put(this.url, transactionData)
    }
}