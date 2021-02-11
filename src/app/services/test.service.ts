import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable()
export class TestService {
    constructor(private http: HttpClient) { }
    getTestData() {
        return this.http.get('https://p6u1b32hpl.execute-api.us-east-2.amazonaws.com/test/test-data')
    }
}