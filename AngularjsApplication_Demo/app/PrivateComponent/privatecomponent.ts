
import { Component, OnInit } from '@angular/core';
import { Deal } from '../model/deal';
import { DealService } from '../service/dealservice';


@Component({
    selector: "public-deals",
    templateUrl: "app/PrivateComponent/privatecomponent.html",
    styleUrls  : ['app/PrivateComponent/privatecomponent.css']
})


export class privatecomponent {
    publicDeals: Deal[];

    constructor(private dealService: DealService) {

    }

    ngOnInit(): void {
        debugger;
        this.dealService.getPublicDeals().then(deals => this.publicDeals = deals);
        this.publicDeals;
    }
    purchase(item) {
        alert("You bought the: " + item.name);
    }
}
