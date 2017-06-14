"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../model/deal.ts" />
/// <reference path="../model/deal.ts" />
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DealService = (function () {
    function DealService(http) {
        this.http = http;
        this.publicdealsurl = "http://localhost:3001/api/deals/public";
    }
    DealService.prototype.getPublicDeals = function () {
        debugger;
        return this.http.get(this.publicdealsurl).toPromise().then(function (response) { return response.json(); }).catch(this.handleerror);
    };
    DealService.prototype.handleerror = function (error) {
        debugger;
        console.error(error.message);
        alert(error);
        return Promise.reject(error.message);
    };
    return DealService;
}());
DealService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DealService);
exports.DealService = DealService;
//# sourceMappingURL=dealservice.js.map