import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer';
@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }
    getCustomer(phoneNumber: string): Observable<CustomerModel[]> {
        return this.http.get<CustomerModel[]>("https://saz5vu03e9.execute-api.us-east-2.amazonaws.com/prod/fetch-customer?customerPhoneNumber=" + phoneNumber)
    }
    createCustomer(newCustomer: CustomerModel) {
        return this.http.put("https://saz5vu03e9.execute-api.us-east-2.amazonaws.com/prod/store-customer", newCustomer)
    }
}