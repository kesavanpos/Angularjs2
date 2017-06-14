/// <reference path="../model/deal.ts" />
/// <reference path="../model/deal.ts" />
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Deal } from '../model/deal';

@Injectable()

export class DealService {

    private publicdealsurl = "http://localhost:3001/api/deals/public";

    constructor(private http: Http)
    {

    }

    getPublicDeals() {
        debugger;
        return this.http.get(this.publicdealsurl).toPromise().then(response => response.json() as Deal[]).catch(this.handleerror);
    }

    private handleerror(error: any): Promise<any> {
        debugger;
        console.error(error.message);
        alert(error);
        return Promise.reject(error.message);
    }

}

