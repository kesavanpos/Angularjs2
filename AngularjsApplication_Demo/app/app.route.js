"use strict";
var aboutuscomponent_1 = require("./AboutUs/aboutuscomponent");
var privatecomponent_1 = require("./PrivateComponent/privatecomponent");
exports.routes = [
    { path: '**', redirectTo: '/deals', pathMatch: 'full' },
    { path: "aboutus", component: aboutuscomponent_1.aboutusComponent },
    { path: "deals", component: privatecomponent_1.privatecomponent }
];
//# sourceMappingURL=app.route.js.map