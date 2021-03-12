import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer';
import { TransactionModel } from '../models/transaction';
@Injectable()
export class TransactionService {
    constructor(private http: HttpClient) { }
    createTransaction(newTransaction: TransactionModel) {
        return this.http.put("https://bzlrdrh3gl.execute-api.us-east-2.amazonaws.com/prod/store-transaction", newTransaction)
    }
    getAllTransactions(): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>('https://bzlrdrh3gl.execute-api.us-east-2.amazonaws.com/prod/fetch-transaction')
    }
}