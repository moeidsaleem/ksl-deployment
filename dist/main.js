(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar style=\"z-index: 100000000000000;\"></app-navbar>\r\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _entry_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./entry/login/login.component */ "./src/app/entry/login/login.component.ts");
/* harmony import */ var _entry_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./entry/signup/signup.component */ "./src/app/entry/signup/signup.component.ts");
/* harmony import */ var _dashboard_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/create-new/create-new.component */ "./src/app/dashboard/create-new/create-new.component.ts");
/* harmony import */ var _dashboard_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/create-dialog/create-dialog.component */ "./src/app/dashboard/create-dialog/create-dialog.component.ts");
/* harmony import */ var _ui_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ui/spinner/spinner.component */ "./src/app/ui/spinner/spinner.component.ts");
/* harmony import */ var _dashboard_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashboard/tracking/tracking.component */ "./src/app/dashboard/tracking/tracking.component.ts");
/* harmony import */ var _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard/orders/orders.component */ "./src/app/dashboard/orders/orders.component.ts");
/* harmony import */ var _dashboard_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard/about-us/about-us.component */ "./src/app/dashboard/about-us/about-us.component.ts");
/* harmony import */ var _dashboard_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard/contact-us/contact-us.component */ "./src/app/dashboard/contact-us/contact-us.component.ts");
/* harmony import */ var _dashboard_countries_countries_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dashboard/countries/countries.component */ "./src/app/dashboard/countries/countries.component.ts");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "./src/app/services/auth-gaurd.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// FireBase





// Material Imports



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                _entry_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _entry_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
                _dashboard_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_28__["CreateNewComponent"],
                _dashboard_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_29__["CreateDialogComponent"],
                _ui_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__["SpinnerComponent"],
                _dashboard_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_31__["TrackingComponent"],
                _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_32__["OrdersComponent"],
                _dashboard_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_33__["AboutUsComponent"],
                _dashboard_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_34__["ContactUsComponent"],
                _dashboard_countries_countries_component__WEBPACK_IMPORTED_MODULE_35__["CountriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB6Mp7CXGfGt5peVHdZaSw8MR7L1BlXKNs',
                    libraries: ["places"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"] },
                    { path: 'signin', component: _entry_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"] },
                    { path: 'signup', component: _entry_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"] },
                    { path: 'create-new', component: _dashboard_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_28__["CreateNewComponent"] },
                    { path: 'orders', component: _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_32__["OrdersComponent"], canActivate: [_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_36__["AuthGaurdService"]] },
                    { path: 'tracking', component: _dashboard_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_31__["TrackingComponent"] },
                    { path: 'about-us', component: _dashboard_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_33__["AboutUsComponent"] },
                    { path: 'contact-us', component: _dashboard_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_34__["ContactUsComponent"] }
                ])
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_37__["ApiService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_38__["HelperService"], _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_36__["AuthGaurdService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_39__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]],
            entryComponents: [_dashboard_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_29__["CreateDialogComponent"], _dashboard_countries_countries_component__WEBPACK_IMPORTED_MODULE_35__["CountriesComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/about-us/about-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/about-us/about-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/about-us/about-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/about-us/about-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Modal1 -->\r\n\t<div class=\"modal fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          \r\n          <div class=\"signin-form profile\">\r\n          <h3 class=\"agileinfo_sign\">Sign In</h3>\t\r\n            <div class=\"login-form\">\r\n            <form action=\"#\" method=\"post\">\r\n              <input type=\"email\" name=\"email\" placeholder=\"E-mail\" required=\"\">\r\n              <input type=\"password\" name=\"password\" placeholder=\"Password\" required=\"\">\r\n              <div class=\"tp\">\r\n              <input type=\"submit\" value=\"Sign In\">\r\n              </div>\r\n            </form>\r\n            </div>\r\n            <div class=\"login-social-grids\">\r\n            <ul>\r\n              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-rss\"></i></a></li>\r\n            </ul>\r\n            </div>\r\n            <p><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal3\" > Don't have an account?</a></p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <!-- //Modal1 -->\t\r\n      <!-- Modal2 -->\r\n      <div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          \r\n          <div class=\"signin-form profile\">\r\n          <h3 class=\"agileinfo_sign\">Sign Up</h3>\t\r\n            <div class=\"login-form\">\r\n            <form action=\"#\" method=\"post\">\r\n               <input type=\"text\" name=\"name\" placeholder=\"Username\" required=\"\">\r\n              <input type=\"email\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n              <input type=\"password\" name=\"password\" placeholder=\"Password\" required=\"\">\r\n              <input type=\"password\" name=\"password\" placeholder=\"Confirm Password\" required=\"\">\r\n              <input type=\"submit\" value=\"Sign Up\">\r\n            </form>\r\n            </div>\r\n            <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <!-- //Modal2 -->\t\r\n  \r\n    <div class=\"inner_main_agile_section\">\r\n      <div class=\"container\">\r\n      <h6>What makes us different</h6>\r\n          <h3 class=\"w3l_header w3_agileits_header\">About <span>Us</span></h3>\r\n      <p class=\"sub_para_agile two\">Ipsum dolor sit amet consectetur adipisicing elit</p>\r\n        \r\n        <div class=\"agile_inner_grids\">\r\n                  \r\n          <div class=\"col-md-6 w3_agileits_about_grid_left\">\r\n            <p>Duis turpis arcu, dictum eu tincidunt id, congue vel urna. Quisque posuere, \r\n              ipsum eu faucibus cursus, ex tortor elementum leo, eget varius lorem quam a nisl. \r\n              Mauris ut enim sed tortor auctor luctus at vitae est.<span>Duis dignissim auctor rhoncus. \r\n              Curabitur diam lorem, ultricies eu pellentesque sed, elementum sodales urna. \r\n              Pellentesque molestie maximus nisl at ultrices.</span> </p>\r\n            <ul>\r\n              <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>Same Day</li>\r\n              <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>Counter to Counter</li>\r\n              <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>Next Flight Out (NFO)</li>\r\n              <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>3-5 Day Economy Deferred</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-6 w3_agileits_about_grid_right\">\r\n            \r\n                  <div id=\"chart\">\r\n                  <ul id=\"numbers\">\r\n                  <li><span>100%</span></li>\r\n                  <li><span>90%</span></li>\r\n                  <li><span>80%</span></li>\r\n                  <li><span>70%</span></li>\r\n                  <li><span>60%</span></li>\r\n                  <li><span>50%</span></li>\r\n                  <li><span>40%</span></li>\r\n                  <li><span>30%</span></li>\r\n                  <li><span>20%</span></li>\r\n                  <li><span>10%</span></li>\r\n                  <li><span>0%</span></li>\r\n                  </ul>\r\n                  <ul id=\"bars\">\r\n                  <li><div data-percentage=\"56\" class=\"bar\"></div><span>Option 1</span></li>\r\n                  <li><div data-percentage=\"33\" class=\"bar\"></div><span>Option 2</span></li>\r\n                  <li><div data-percentage=\"54\" class=\"bar\"></div><span>Option 3</span></li>\r\n                  <li><div data-percentage=\"94\" class=\"bar\"></div><span>Option 4</span></li>\r\n                  <li><div data-percentage=\"44\" class=\"bar\"></div><span>Option 5</span></li>\r\n                  <li><div data-percentage=\"23\" class=\"bar\"></div><span>Option 6</span></li>\r\n                  </ul>\r\n                </div>\r\n          </div>\r\n          <div class=\"clearfix\"> </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/dashboard/about-us/about-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/about-us/about-us.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/dashboard/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/dashboard/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/contact-us/contact-us.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/contact-us/contact-us.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/contact-us/contact-us.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/contact-us/contact-us.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner1\">\r\n\t\t\t\r\n    <div class=\"w3_agileits_service_banner_info\">\r\n      <h2>Mail Us </h2>\r\n    </div>\r\n  </div>\r\n  \r\n  <!--/ banner -->\r\n  <!-- Modal1 -->\r\n                          <div class=\"modal fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                            <!-- Modal content-->\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                  \r\n                                  <div class=\"signin-form profile\">\r\n                                  <h3 class=\"agileinfo_sign\">Sign In</h3>\t\r\n                                      <div class=\"login-form\">\r\n                                        <form action=\"#\" method=\"post\">\r\n                                          <input type=\"email\" name=\"email\" placeholder=\"E-mail\" required=\"\">\r\n                                          <input type=\"password\" name=\"password\" placeholder=\"Password\" required=\"\">\r\n                                          <div class=\"tp\">\r\n                                            <input type=\"submit\" value=\"Sign In\">\r\n                                          </div>\r\n                                        </form>\r\n                                      </div>\r\n                                      <div class=\"login-social-grids\">\r\n                                        <ul>\r\n                                          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                                          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                                          <li><a href=\"#\"><i class=\"fa fa-rss\"></i></a></li>\r\n                                        </ul>\r\n                                      </div>\r\n                                      <p><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal3\" > Don't have an account?</a></p>\r\n                                    </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- //Modal1 -->\t\r\n                          <!-- Modal2 -->\r\n                          <div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                            <!-- Modal content-->\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                  \r\n                                  <div class=\"signin-form profile\">\r\n                                  <h3 class=\"agileinfo_sign\">Sign Up</h3>\t\r\n                                      <div class=\"login-form\">\r\n                                        <form action=\"#\" method=\"post\">\r\n                                           <input type=\"text\" name=\"name\" placeholder=\"Username\" required=\"\">\r\n                                          <input type=\"email\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                          <input type=\"password\" name=\"password\" placeholder=\"Password\" required=\"\">\r\n                                          <input type=\"password\" name=\"password\" placeholder=\"Confirm Password\" required=\"\">\r\n                                          <input type=\"submit\" value=\"Sign Up\">\r\n                                        </form>\r\n                                      </div>\r\n                                      <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\r\n                                    </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- //Modal2 -->\t\r\n  <!-- /contact -->\t\r\n  <div class=\"inner_main_agile_section\">\r\n  <div class=\"container\">\r\n      <h3 class=\"w3l_header w3_agileits_header\"> Leave a <span>Message</span></h3>\r\n      <p class=\"sub_para_agile two\">Ipsum dolor sit amet consectetur adipisicing elit</p>\r\n       <div class=\"contact-form agile_inner_grids\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"send(form)\">\r\n          <div class=\"fields-grid\">\r\n            <div class=\"styled-input agile-styled-input-top\">\r\n              <input type=\"text\" name=\"Full Name\" required=\"\" formControlName=\"name\">\r\n              <label>Full Name *</label>\r\n              <span></span>\r\n            </div>\r\n            <div class=\"styled-input agile-styled-input-top\">\r\n              <input type=\"text\" name=\"Phone\" required=\"\" formControlName=\"phone\"> \r\n              <label>Phone * <small>(with country code)</small></label>\r\n              <span></span>\r\n            </div>\r\n            <div class=\"styled-input\">\r\n              <input type=\"email\" name=\"Email\" required=\"\" formControlName=\"email\"> \r\n              <label>Email *</label>\r\n              <span></span>\r\n            </div> \r\n            <div class=\"styled-input\">\r\n              <input type=\"text\" name=\"Subject\" required=\"\" formControlName=\"subject\">\r\n              <label>Subject *</label>\r\n              <span></span>\r\n            </div>\r\n            <div class=\"clearfix\"> </div>\r\n          </div>\r\n          <div class=\"styled-input textarea-grid\">\r\n            <textarea name=\"Message\" required=\"\" formControlName=\"message\"></textarea>\r\n            <label>Message* <small>(min 10 words.)</small></label>\r\n            <span></span>\r\n          </div>\t \r\n          <input type=\"submit\" value=\"SEND\" [disabled]=\"form.pristine || form.invalid\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n            <!-- map -->\r\n        <h3 class=\"w3l_header w3_agileits_header\"> Find <span>Us</span></h3>\r\n      <p class=\"sub_para_agile two\">Ipsum dolor sit amet consectetur adipisicing elit</p>\r\n        <div class=\"map\">\r\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387145.86654334463!2d-74.25818682528057!3d40.70531100753592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1497241987900\"  allowfullscreen></iframe>\r\n        </div>\r\n      <!-- //map --> \r\n  <!-- //contact -->\t"

/***/ }),

/***/ "./src/app/dashboard/contact-us/contact-us.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/contact-us/contact-us.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(fb, api, router) {
        this.fb = fb;
        this.api = api;
        this.router = router;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)
                ])]
        });
    };
    ContactUsComponent.prototype.send = function (form) {
        var _this = this;
        var data = {
            name: form.value.name,
            phone: form.value.phone,
            email: form.value.email,
            subject: form.value.subject,
            message: form.value.message
        };
        this.api.contactUs(data)
            .then(function (res) {
            _this.router.navigate(['']);
        }, function (err) {
            console.log(err.message);
        });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/dashboard/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/dashboard/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/countries/countries.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/countries/countries.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/countries/countries.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/countries/countries.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <ul style=\"list-style-type: none;\">\r\n    <li *ngFor=\"let item of countries\" style=\"cursor: pointer;\">\r\n      <span (click)=\"selected(item)\">\r\n      <img src=\"https://www.countryflags.io/{{item.code}}/shiny/32.png\" alt=\"country\">&nbsp;{{item.name}}\r\n    </span></li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/countries/countries.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/countries/countries.component.ts ***!
  \************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(dialogRef, data, helper) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.helper = helper;
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helper.getCountries()
            .subscribe(function (res) {
            _this.countries = res;
        });
    };
    CountriesComponent.prototype.selected = function (item) {
        this.data.name = item.name;
        this.data.code = item.code;
        this.dialogRef.close(this.data);
    };
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/dashboard/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/dashboard/countries/countries.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-dialog/create-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/create-dialog/create-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerr{\r\n    z-index: 100;\r\n    max-height: 600px !important;\r\n}\r\nmat-dialog-container{\r\n    max-height: 600px !important;\r\n}\r\n#cdk-overlay-0{\r\n    max-height: 600px !important;\r\n\r\n}\r\n.modalForm{\r\n    max-width: 480px;\r\n    min-width: 302px;\r\n}\r\n.form-full-width{\r\n    width: 100%;\r\n}\r\n.field{\r\n    width: 227px !important;\r\n    min-width: 145px !important;\r\n}\r\n@media (min-width: 1200px) { \r\n    #checkButton{\r\n        position: absolute;\r\n        bottom: -10;\r\n        right: 32%;\r\n    }\r\n    \r\n    #checkButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    #backButton{\r\n        position: absolute;\r\n        top: 52px;\r\n        left: 28%;\r\n    }\r\n    \r\n    #backButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    .form3{\r\n        width: 500px !important;\r\n    }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199.98px){\r\n    #checkButton{\r\n        position: absolute;\r\n        bottom: -10;\r\n        right: 25%;\r\n    }\r\n    \r\n    #checkButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    #backButton{\r\n        position: absolute;\r\n        top: 52px;\r\n        left: 24%;\r\n    }\r\n    \r\n    #backButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n }\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n    #checkButton{\r\n        position: absolute;\r\n        bottom: -10;\r\n        right: 25%;\r\n    }\r\n    \r\n    #checkButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    #backButton{\r\n        position: absolute;\r\n        top: 52px;\r\n        left: 18%;\r\n    }\r\n    \r\n    #backButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n}\r\n@media (min-width: 660px) and (max-width: 767.98px) { \r\n    #checkButton{\r\n        position: absolute;\r\n        bottom: -10;\r\n        right: 17%;\r\n    }\r\n    \r\n    #checkButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    #backButton{\r\n        position: absolute;\r\n        top: 52px;\r\n        left: 12%;\r\n    }\r\n    \r\n    #backButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n}\r\n@media (min-width: 576px) and (max-width: 659.98px) { \r\n    #checkButton{\r\n        position: absolute;\r\n        bottom: 10px;\r\n        right: 5%;\r\n    }\r\n    \r\n    #checkButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    #backButton{\r\n        position: absolute;\r\n        top: 5px;\r\n        left: 5%;\r\n    }\r\n    \r\n    #backButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n}\r\n@media (max-width: 576px){ \r\n    #checkButton{\r\n        position: absolute;\r\n        bottom: 10px;\r\n        right: 4%;\r\n    }\r\n    \r\n    #checkButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n    #backButton{\r\n        position: absolute;\r\n        top: 5px;\r\n        left: 3%;\r\n    }\r\n    \r\n    #backButton > button{\r\n        width: 53px;\r\n        background-color: #FFFFFF !important;\r\n        height: 53px;\r\n        outline: 0;\r\n    }\r\n}\r\n.header{\r\n    display: table !important;\r\n}\r\n.content{\r\n    display: table-cell;\r\n}\r\n.nameTag{\r\n    background-color: #FF0057 !important;\r\n    color: white !important;\r\n    border-radius: 100%;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: 10px;\r\n}\r\n.nameTag > h5{\r\n    text-align: center !important;\r\n    position: relative;\r\n    top: 10px;\r\n    font-size: 1.2em;\r\n}\r\n.information{\r\n    display: table-cell;\r\n    padding-left: 10px;\r\n}\r\n.namePlace{\r\n    display: table-row;\r\n    padding-left: 20px !important;\r\n}\r\n.address{\r\n    margin-top: -40px !important;\r\n\r\n}\r\n.top{\r\n    max-height: 112px !important;\r\n    min-height: 112px !important;\r\n}\r\n/* .form1{\r\n    margin-top: 100px !important;\r\n} */\r\n#boxes{\r\n    min-height: 140px !important;\r\n    display: table;\r\n    max-width: 480px;\r\n    width: 100% !important;\r\n}\r\n#left{\r\n    background-color: #FFFFFF !important;\r\n    box-shadow: none !important;\r\n    /* float: left;\r\n    position: relative;\r\n    top: 50px; */\r\n    display: table-cell !important;\r\n    position: relative;\r\n    left: 0 !important;\r\n    top: -50px;\r\n}\r\n#left:active{\r\n    background-color: grey !important;\r\n}\r\n#right{\r\n    background-color: #FFFFFF !important;\r\n    box-shadow: none !important;\r\n    /* float: right;\r\n    position: relative;\r\n    top: 50px; */\r\n    display: table-cell !important;\r\n    position: relative;\r\n    right: 0 !important;\r\n    top: -50px;\r\n}\r\n#right:active{\r\n    background-color: grey !important;\r\n\r\n}\r\n#box{\r\n    display: table-cell !important;\r\n}\r\n#inner{\r\n    display: inline-block;\r\n}\r\n#inner > p{\r\n    float: left;\r\n    position: relative;\r\n    top: 50px !important;\r\n}\r\n#inner > img{\r\n    float: right;\r\n    position: relative;\r\n    left: 35%;\r\n    width: 130px !important;\r\n    height: 130px !important;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/create-dialog/create-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/create-dialog/create-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerr\" style=\"max-height: 600px !important;\">\r\n    <div class=\"form1\" *ngIf=\"showForm\" [@hideForms]=\"currentState\">\r\n      <h3>Sender Information</h3>\r\n      <hr style=\"max-width: 522px !important;\">\r\n        <form [formGroup]=\"form\" class=\"modalForm\">\r\n    \r\n            <mat-form-field class=\"form-full-width\">\r\n              <input type=\"text\" matInput placeholder=\"Sender Name *\" formControlName=\"sendername\" #sendername>\r\n              <mat-icon matSuffix>contact_phone</mat-icon>\r\n            </mat-form-field>\r\n            <div class=\"form-full-width\">\r\n              <mat-form-field class=\"field\" style=\"width: 227px !important;\">\r\n                  <input type=\"text\" matInput placeholder=\"Phone Code\" formControlName=\"phonecode\" #phonecode readonly>\r\n              </mat-form-field>\r\n              <span style=\"margin-left: 20px !important;\"></span>\r\n              <mat-form-field class=\"field\">\r\n                <input type=\"number\" matInput placeholder=\"Phone number\" formControlName=\"phone\" #phone>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"form-full-width\">\r\n                <mat-form-field class=\"field\" style=\"width: 227px !important;\">\r\n                    <input type=\"text\" matInput placeholder=\"City *\" formControlName=\"city\" #city readonly>\r\n                </mat-form-field>\r\n                <span style=\"margin-left: 20px !important;\"></span>\r\n                <mat-form-field class=\"field\">\r\n                  <input type=\"text\" matInput placeholder=\"Region *\" formControlName=\"region\" #region>\r\n                </mat-form-field>\r\n            </div>\r\n            <mat-form-field class=\"form-full-width\">\r\n                <input type=\"text\" matInput placeholder=\"Street\" formControlName=\"street\" #street>\r\n            </mat-form-field>\r\n            <div class=\"form-full-width\">\r\n                <mat-form-field class=\"field\" style=\"width: 227px !important;\">\r\n                    <input type=\"text\" matInput placeholder=\"Building / Villa *\" formControlName=\"building\" #building>\r\n                </mat-form-field>\r\n                <span style=\"margin-left: 20px !important;\"></span>\r\n                <mat-form-field class=\"field\">\r\n                  <input type=\"text\" matInput placeholder=\"Apartment / Office *\" formControlName=\"office\" #office>\r\n                </mat-form-field>\r\n            </div>\r\n            <mat-form-field class=\"form-full-width\">\r\n                <mat-select placeholder=\"Address Type *\" formControlName=\"addresstype\" #addresstype>\r\n                    <mat-option value=\"Residential\">Residential</mat-option>\r\n                    <mat-option value=\"Bussiness\" >Bussiness</mat-option>\r\n                  </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-full-width\">\r\n                <input type=\"text\" matInput placeholder=\"Nearest Landmark\" formControlName=\"nearestlandmark\" #nearestlandmark>\r\n            </mat-form-field>\r\n          </form>\r\n    </div>\r\n    <div class=\"form2\" *ngIf=\"showForm1\" [@hideForms]=\"currentState1\" >\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-3\">\r\n                    <button mat-button (click)=\"back()\"  ><mat-icon style=\"color: #A0D08E;\">arrow_back</mat-icon></button>\r\n            </div>\r\n            <div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-8\">\r\n                    <h3>Recipient Information</h3>\r\n            </div>\r\n        </div>\r\n        <form [formGroup]=\"form1\" class=\"modalForm\">\r\n    \r\n            <mat-form-field class=\"form-full-width\">\r\n              <input type=\"text\" matInput placeholder=\"Recipient Name *\" formControlName=\"recipientname\" #recipientname>\r\n              <mat-icon matSuffix>contact_phone</mat-icon>\r\n            </mat-form-field>\r\n            <div class=\"form-full-width\">\r\n              <mat-form-field class=\"field\" style=\"width: 227px !important;\">\r\n                  <input type=\"text\" matInput placeholder=\"Phone Code\" formControlName=\"phonecode\" #phonecode readonly>\r\n              </mat-form-field>\r\n              <span style=\"margin-left: 20px !important;\"></span>\r\n              <mat-form-field class=\"field\">\r\n                <input type=\"number\" matInput placeholder=\"Phone number\" formControlName=\"phone\" #phone>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"form-full-width\">\r\n                <mat-form-field class=\"field\" style=\"width: 227px !important;\">\r\n                    <input type=\"text\" matInput placeholder=\"City *\" formControlName=\"city\" #city readonly>\r\n                </mat-form-field>\r\n                <span style=\"margin-left: 20px !important;\"></span>\r\n                <mat-form-field class=\"field\">\r\n                  <input type=\"text\" matInput placeholder=\"Region *\" formControlName=\"region\" #region>\r\n                </mat-form-field>\r\n            </div>\r\n            <mat-form-field class=\"form-full-width\">\r\n                <input type=\"text\" matInput placeholder=\"Street\" formControlName=\"street\" #street>\r\n            </mat-form-field>\r\n            <div class=\"form-full-width\">\r\n                <mat-form-field class=\"field\" style=\"width: 227px !important;\">\r\n                    <input type=\"text\" matInput placeholder=\"Building / Villa *\" formControlName=\"building\" #building>\r\n                </mat-form-field>\r\n                <span style=\"margin-left: 20px !important;\"></span>\r\n                <mat-form-field class=\"field\">\r\n                  <input type=\"text\" matInput placeholder=\"Apartment / Office *\" formControlName=\"office\" #office>\r\n                </mat-form-field>\r\n            </div>\r\n            <mat-form-field class=\"form-full-width\">\r\n                <mat-select placeholder=\"Address Type *\" formControlName=\"addresstype\" #addresstype>\r\n                    <mat-option value=\"Residential\">Residential</mat-option>\r\n                    <mat-option value=\"Bussiness\" >Bussiness</mat-option>\r\n                  </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-full-width\">\r\n                <input type=\"text\" matInput placeholder=\"Nearest Landmark\" formControlName=\"nearestlandmark\" #nearestlandmark>\r\n            </mat-form-field>\r\n          </form>\r\n      </div>\r\n    <div class=\"form3\" *ngIf=\"showForm2\" style=\"position: relative; top: -23px !important; max-height: 590px !important; bottom: 30px !important;\">\r\n            <div class=\"row\">\r\n                    <div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-3\">\r\n                            <button mat-button (click)=\"back()\"  ><mat-icon style=\"color: #A0D08E;\">arrow_back</mat-icon></button>\r\n                    </div>\r\n                    <div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-8\">\r\n                            <h3>What size do you want</h3>\r\n                        </div>\r\n                </div>\r\n        <div id=\"boxes\" style=\"max-height: 130px !important;\">\r\n          <button mat-mini-fab id=\"left\"><mat-icon style=\"color: black; background-color: #ffffff !important;\" (click)=\"previousBox()\" >keyboard_arrow_left</mat-icon></button>\r\n          <div id=\"box\">\r\n            <div id=\"inner\">\r\n               <p>{{selected?.text}}</p>\r\n            <img src=\"{{selected?.image}}\" alt=\"box\">\r\n            </div>\r\n           \r\n          </div>\r\n          \r\n          <button mat-mini-fab id=\"right\"><mat-icon style=\"color: black; background-color: #ffffff !important;\" (click)=\"nextBox()\" >keyboard_arrow_right</mat-icon></button>\r\n  \r\n          </div>\r\n          <hr>\r\n  \r\n          <form [formGroup]=\"form2\" >\r\n              <div class=\"form-full-width\">\r\n                  <mat-form-field  style=\"width: 120px !important;\">\r\n                      <input type=\"number\" matInput placeholder=\"Length\" formControlName=\"length\" #length min=\"0\">\r\n                  </mat-form-field>\r\n                  <mat-hint>cm</mat-hint>\r\n  \r\n                  <mat-form-field style=\"width: 120px !important; margin-left: 40px !important;\">\r\n                      <input type=\"number\" matInput placeholder=\"Width\" formControlName=\"width\" #width>\r\n                      \r\n                  </mat-form-field>\r\n                  <mat-hint>cm</mat-hint>\r\n                  <mat-form-field style=\"width: 120px !important; margin-left: 40px !important;\">\r\n                      <input type=\"number\" matInput placeholder=\"Height\" formControlName=\"height\" #height>\r\n                  </mat-form-field>\r\n                  <mat-hint>cm</mat-hint>\r\n              </div>\r\n\r\n              <mat-form-field class=\"form-full-width\">\r\n                <input type=\"number\" matInput placeholder=\"Actual Weight\" formControlName=\"actualweight\" #actualweight min=\"0\">\r\n              </mat-form-field>\r\n            <p><strong>Chargable Weight:</strong><span style=\"float: right !important;\"><strong>{{form2.value.chargableweight}} Kg</strong></span></p>\r\n          \r\n                  <!-- <mat-checkbox class=\"example-margin\" [(ngModel)]=\"terms\">Terms & Conditions</mat-checkbox>\r\n                  <br>\r\n                  <mat-checkbox  [(ngModel)]=\"prohibit\">No Prohibited Products</mat-checkbox> -->\r\n          </form>\r\n  \r\n  \r\n      </div>\r\n      <div class=\"form3\" *ngIf=\"showForm3\">\r\n            <div class=\"row\">\r\n                    <div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-3\">\r\n                            <button mat-button (click)=\"back()\"  ><mat-icon style=\"color: #A0D08E;\">arrow_back</mat-icon></button>\r\n                    </div>\r\n                    <div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-8\">\r\n                            <h3>Additional Info</h3>\r\n                        </div>\r\n                </div>\r\n                <br>\r\n            <form [formGroup]=\"form2\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                        <br>\r\n                        <p class=\"small\"  >Item Value (in AED):</p>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                    <mat-form-field >\r\n                        <input type=\"number\" matInput placeholder=\"Item Value\"  formControlName=\"itemvalue\" #itemvalue min=\"0\">\r\n                        <mat-error *ngIf=\"itemvalue.value === 0 \">Enter Item Value</mat-error>\r\n                    </mat-form-field>\r\n                    </div>\r\n    \r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-5\">\r\n                          <br>\r\n                            <p class=\"small\" >Item Description:</p>\r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                      <mat-form-field >\r\n                          <input type=\"text\" matInput placeholder=\"Item Description\"  formControlName=\"itemdescription\" #itemdescription>\r\n                      </mat-form-field>\r\n                      </div>\r\n      \r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                                <br>\r\n                                          <p class=\"small\" >Units:</p>\r\n                                        </div>\r\n                                        <div class=\"col-md-7\">\r\n                        <mat-form-field >\r\n                            <input type=\"number\" matInput placeholder=\"Item Description\" min=\"1\"  formControlName=\"units\" #units>\r\n                        </mat-form-field>\r\n                        </div>\r\n        \r\n                      </div>\r\n                      <div class=\"row\">\r\n                            <mat-checkbox class=\"example-margin\" formControlName=\"pickup\" #pickup>Door to Door Service. <small>( AED {{pickupCharg?.charges}})</small></mat-checkbox>\r\n\r\n                      </div>\r\n                      <br>\r\n            </form>\r\n      </div>\r\n      <div class=\"form4\" *ngIf=\"showSpinner\">\r\n        <app-spinner style=\"position: relative; left: 40%;\" ></app-spinner> \r\n      </div>\r\n\r\n      <div class=\"classform5\" *ngIf=\"showForm4\">\r\n        <div class=\"container-fluid\" (click)=\"fromSection()\" style=\"cursor: pointer;\">\r\n           <div class=\"row\">\r\n               <div class=\"col-md-2\">\r\n                    <h4>From:</h4>\r\n               </div>\r\n               <div class=\"col-md-10\">\r\n                   <div class=\"row\">\r\n                       <div class=\"col-md-12\">\r\n                           <h5>{{newOrder?.sender[0].sendername}}</h5>\r\n                       </div>\r\n                   </div>\r\n                   <div class=\"row\">\r\n                       <div class=\"col-md-12\">\r\n                           <p>{{newOrder?.sender[0].office + newOrder?.sender[0].building}}, {{newOrder?.sender[0]?.street + newOrder?.sender[0].region}},\r\n                            {{newOrder?.sender[0].city}}, {{newOrder?.sender[0].country}}    \r\n                        </p>\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"container-fluid\" (click)=\"toSection()\" style=\"cursor: pointer;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                     <h4>To:</h4>\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <h5>{{newOrder?.recipient[0].recipientname}}</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <p>{{newOrder?.recipient[0].office + newOrder?.recipient[0].building}}, {{newOrder?.recipient[0]?.street + newOrder?.recipient[0].region}},\r\n                                {{newOrder?.recipient[0].city}}, {{newOrder?.recipient[0].country}}    \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n         </div>\r\n         <div class=\"container-fluid\" (click)=\"shipmentDetails()\" style=\"cursor:pointer;\" >\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <h4>Shipment Details:</h4>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-md-12\"><p class=\"small\">Item Description: {{newOrder.shipment[0].itemdescription}}</p></div>\r\n                                </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\"><p class=\"small\">Weight: {{newOrder.shipment[0].chargableweight}}</p></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n         </div>\r\n         <hr>\r\n         <h4>Total: <span style=\"position: relative; right: 0px !important;\">AED {{newOrder.total}}</span></h4>\r\n\r\n         <br>\r\n\r\n         <form [formGroup]=\"form3\">\r\n            <div class=\"row\">\r\n                <mat-checkbox class=\"example-margin\" formControlName=\"terms\" >I Accept Terms & Conditions.</mat-checkbox>\r\n    \r\n             </div>\r\n             <div class=\"row\">\r\n                <mat-checkbox class=\"example-margin\" formControlName=\"illegal\" >No Prohibited Item.</mat-checkbox>\r\n    \r\n             </div>\r\n    \r\n             <div class=\"row\">\r\n                 <div class=\"col-6\">\r\n                    <button mat-button color=\"warn\" style=\"width: 100% !important; outline: 0;\" (click)=\"cod()\" [disabled]=\"form3.pristine || !form3.value.terms || !form3.value.illegal\" >Cash on Delivery</button>\r\n                 </div>\r\n                 <div class=\"col-6\">\r\n                    <button mat-button color=\"warn\" style=\"width: 100% !important; outline: 0\" (click)=\"pay()\" [disabled]=\"form3.pristine || !form3.value.terms || !form3.value.illegal\" >Pay Now</button>\r\n                 </div>\r\n             </div>\r\n         </form>\r\n\r\n         \r\n\r\n    </div>\r\n    <div *ngIf=\"showError\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-3\">\r\n                            <button mat-button (click)=\"back()\"  ><mat-icon style=\"color: #A0D08E;\">arrow_back</mat-icon></button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Unfortunately, we couldn't get the right price for your order. Please Contact us at <a routerLink=\"/contact-us\">here.</a></h3>\r\n                    <h3>Thank you.</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  <div id=\"checkButton\" *ngIf=\"!showForm4 && !showSpinner && !showError\">\r\n      <button mat-mini-fab (click)=\"next()\" ><mat-icon style=\"color: #A0D08E;\">done</mat-icon></button>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/create-dialog/create-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/create-dialog/create-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: MyErrorStateMatcher, CreateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDialogComponent", function() { return CreateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// import * as global from '../../../global';



var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        return control.parent.invalid && control.touched;
    };
    return MyErrorStateMatcher;
}());

var CreateDialogComponent = /** @class */ (function () {
    function CreateDialogComponent(fb, api, helper, dialogRef, data, snackBar) {
        this.fb = fb;
        this.api = api;
        this.helper = helper;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.matcher = new MyErrorStateMatcher();
        this.showForm = false;
        this.showForm1 = false;
        this.showForm2 = false;
        this.showForm3 = false;
        this.box = new Array(8);
        this.current = 0;
        this.terms = false;
        this.prohibit = false;
        this.showSpinner = false;
        this.showForm4 = false;
        this.backBtn = false;
        this.showError = false;
        this.count = 0;
        this.id = '';
        // this.description = data.description;
        this.order = JSON.parse(localStorage.getItem('booking'));
        if (this.order.price.startsWith('Saver')) {
            var p = this.order.price.substring(18, this.order.price.length);
            this.amount = parseInt(p);
        }
        else {
            var p = this.order.price.substring(18, this.order.price.length);
            this.amount = parseInt(p);
        }
    }
    CreateDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showForm = true;
        // this.showSpinner = true;
        this.setStripes();
        this.form = this.fb.group({
            sendername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['United Arab Emirates', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonecode: ["United Arab Emirates " + this.order.fromCode, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)])],
            city: [this.order.from, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: [''],
            building: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            office: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addresstype: ['Residential', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nearestlandmark: ['']
        });
        this.form3 = this.fb.group({
            terms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            illegal: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.form1 = this.fb.group({
            recipientname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: [this.order.destination, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonecode: [this.order.destination + " " + this.order.destCode, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)])],
            city: [this.order.city, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: [''],
            building: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            office: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addresstype: ['Residential', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nearestlandmark: ['']
        });
        this.api.getBoxes()
            .subscribe(function (res) {
            var x;
            x = res;
            x.forEach(function (a) {
                switch (a.text) {
                    case 'Document Size': {
                        _this.box[0] = a;
                        break;
                    }
                    case 'Phone Size': {
                        _this.box[1] = a;
                        break;
                    }
                    case 'Small Box Size': {
                        _this.box[2] = a;
                        break;
                    }
                    case 'Medium Box Size': {
                        _this.box[3] = a;
                        break;
                    }
                    case 'Large Box Size': {
                        _this.box[4] = a;
                        break;
                    }
                    case 'Extra Large Box Size': {
                        _this.box[5] = a;
                        break;
                    }
                    case 'TV Size': {
                        _this.box[6] = a;
                        break;
                    }
                    case 'Tube Size': {
                        _this.box[7] = a;
                        break;
                    }
                }
            });
            _this.selected = _this.box[0];
            _this.current = 0;
            var w = (_this.selected.length * _this.selected.width * _this.selected.height) / 5000;
            var pickup = false;
            if (!_this.order.price.startsWith('Saver')) {
                pickup = true;
            }
            _this.form2 = _this.fb.group({
                length: [_this.selected.length, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                width: [_this.selected.width, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                height: [_this.selected.height, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                actualweight: [_this.order.weight, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                chargableweight: [(w < _this.order.weight) ? _this.order.weight : w],
                itemvalue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                itemdescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                units: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pickup: [pickup]
            });
            _this.onChanges();
        });
        this.api.getNewOrders()
            .subscribe(function (res) {
            _this.getOrders = res;
        });
        this.api.getPricingById('pickup')
            .subscribe(function (res) {
            _this.pickupCharg = res;
        });
        this.api.getPrice(this.order.destination)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var did = a.payload.doc.id;
            var data = a.payload.doc.data();
            return __assign({ did: did }, data);
        }); }))
            .subscribe(function (res) {
            _this.rates = res;
        });
    };
    CreateDialogComponent.prototype.onChanges = function () {
        var _this = this;
        this.form2.get('length').valueChanges.subscribe(function (res) {
            _this.setChargableWeight();
        });
        this.form2.get('width').valueChanges.subscribe(function (res) {
            _this.setChargableWeight();
        });
        this.form2.get('height').valueChanges.subscribe(function (res) {
            _this.setChargableWeight();
        });
        this.form2.get('actualweight').valueChanges.subscribe(function (res) {
            if (_this.form2.value.actualweight < _this.form2.value.chargableweight) {
                _this.setChargableWeight();
            }
            else
                _this.form2.get('chargableweight').setValue((_this.form2.value.chargableweight > _this.form2.value.actualweight) ? _this.form2.value.chargableweight : _this.form2.value.actualweight);
        });
    };
    Object.defineProperty(CreateDialogComponent.prototype, "currentState", {
        get: function () {
            return this.showForm ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateDialogComponent.prototype, "currentState1", {
        get: function () {
            return this.showForm1 ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    CreateDialogComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    CreateDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CreateDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateDialogComponent.prototype.back = function () {
        if (this.count === 1 && this.showForm1) {
            this.count--;
            this.showForm = true;
            this.showForm1 = false;
            this.backBtn = false;
        }
        else if (this.count === 2 && this.showForm2) {
            this.count--;
            this.showForm2 = false;
            this.showForm1 = true;
            this.backBtn = true;
        }
        else if (this.count === 3 && this.showForm3) {
            this.count--;
            this.showForm3 = false;
            this.showForm2 = true;
            this.backBtn = true;
        }
        else if (this.count === 4 && this.showError) {
            this.count--;
            this.showForm4 = false;
            this.showForm3 = true;
            this.showError = false;
        }
    };
    CreateDialogComponent.prototype.next = function () {
        var _this = this;
        if (this.count === 0 && this.form.valid) {
            if (this.showForm) {
                this.showForm = false;
                this.showForm1 = true;
                this.count++;
                this.backBtn = true;
            }
        }
        else if (this.count === 1 && this.form1.valid) {
            if (this.showForm1) {
                this.showForm1 = false;
                this.showForm2 = true;
                this.count++;
            }
        }
        else if (this.count === 2 && this.showForm2) {
            this.showForm2 = false;
            this.showForm3 = true;
            this.count++;
        }
        else if (this.count === 3 && this.form2.valid && this.showForm3) {
            this.count++;
            this.backBtn = false;
            this.showForm3 = false;
            this.showSpinner = true;
            if (parseInt(this.form2.value.chargableweight) > this.order.weight || this.amount === 0)
                this.amount = this.getPrices(this.form1.value.country, this.form2.value.chargableweight);
            setTimeout(function () {
                if (_this.amount === 0) {
                    _this.showError = true;
                    _this.showForm4 = false;
                    _this.showSpinner = false;
                }
                else {
                    _this.showSpinner = false;
                    _this.showForm4 = true;
                }
            }, 2000);
            this.newOrder = {
                amount: this.amount,
                comments: '',
                date: new Date(),
                from: 'United Arab Emirates',
                insurance: false,
                insurancecharges: 0,
                orderconfirmed: false,
                orderid: '',
                orderstatus: 'pending',
                paymentmethod: '',
                paymentstatus: 'Unpaid',
                pickup: (this.form2.value.pickup === true) ? true : false,
                pickupaddress: '',
                pickupcharges: (this.form2.value.pickup === true) ? this.pickupCharg.charges : 0,
                pickupdate: '',
                pickuptime: '',
                to: this.form1.value.country,
                units: this.form2.value.units,
                userid: localStorage.getItem('tuid'),
                total: this.amount * parseInt(this.form2.value.units),
                recipient: [
                    {
                        addresstype: this.form1.value.addresstype,
                        building: this.form1.value.building,
                        city: this.form1.value.city,
                        country: this.form1.value.country,
                        nearestlandmark: this.form1.value.nearestlandmark,
                        office: this.form1.value.office,
                        phone: this.order.destCode + " " + this.form1.value.phone,
                        recipientname: this.form1.value.recipientname,
                        region: this.form1.value.region,
                        street: this.form1.value.street
                    }
                ],
                sender: [
                    {
                        addresstype: this.form.value.addresstype,
                        building: this.form.value.building,
                        country: 'United Arab Emirates',
                        city: this.form.value.city,
                        nearestlandmark: this.form.value.nearestlandmark,
                        office: this.form.value.office,
                        phone: this.order.fromCode + " " + this.form.value.phone,
                        sendername: this.form.value.sendername,
                        region: this.form.value.region,
                        street: this.form.value.street
                    }
                ],
                shipment: [{
                        actualweight: this.form2.value.actualweight,
                        chargableweight: this.form2.value.chargableweight,
                        height: this.form2.value.height,
                        length: this.form2.value.length,
                        width: this.form2.value.width,
                        itemdescription: this.form2.value.itemdescription,
                        itemvalue: this.form2.value.itemvalue,
                    }]
            };
            this.newOrder.total += this.newOrder.pickupcharges;
            this.generateId(this.newOrder.to, this.newOrder.shipment[0].chargableweight);
        }
    };
    CreateDialogComponent.prototype.setChargableWeight = function () {
        var length = this.form2.value.length;
        var width = this.form2.value.width;
        var height = this.form2.value.height;
        var w = (length * width * height) / 5000;
        this.form2.get('chargableweight').setValue((w > this.form2.value.actualweight) ? w : this.form2.value.actualweight);
    };
    CreateDialogComponent.prototype.nextBox = function () {
        if (this.current + 1 <= this.box.length - 1) {
            this.selected = this.box[this.current + 1];
            this.current++;
            this.form2.controls['length'].setValue(this.selected.length);
            this.form2.controls['width'].setValue(this.selected.width);
            this.form2.controls['height'].setValue(this.selected.height);
            // this.form2.value.length = this.selected.length;
            // this.form2.value.width = this.selected.width;
            // this.form2.value.height = this.selected.height;
            this.setChargableWeight();
        }
        else if (this.current + 1 === this.box.length) {
            this.selected = this.box[0];
            this.current = 0;
            this.form2.controls['length'].setValue(this.selected.length);
            this.form2.controls['width'].setValue(this.selected.width);
            this.form2.controls['height'].setValue(this.selected.height);
            this.setChargableWeight();
        }
    };
    CreateDialogComponent.prototype.previousBox = function () {
        if (this.current - 1 !== -1) {
            this.selected = this.box[this.current - 1];
            this.current--;
            this.form2.controls['length'].setValue(this.selected.length);
            this.form2.controls['width'].setValue(this.selected.width);
            this.form2.controls['height'].setValue(this.selected.height);
            this.setChargableWeight();
        }
        else if (this.current - 1 === -1) {
            this.current = this.box.length - 1;
            this.selected = this.box[this.current];
            this.form2.controls['length'].setValue(this.selected.length);
            this.form2.controls['width'].setValue(this.selected.width);
            this.form2.controls['height'].setValue(this.selected.height);
            this.setChargableWeight();
        }
    };
    CreateDialogComponent.prototype.cod = function () {
        var _this = this;
        this.newOrder.paymentmethod = 'Cash On Delivery';
        this.newOrder.recipient[0].country = {
            name: this.newOrder.to,
            code: this.code
        };
        this.api.createOrder(this.newOrder)
            .then(function (res) {
            _this.close();
        }, function (err) {
            console.log(err);
        });
    };
    CreateDialogComponent.prototype.generateId = function (country, weight) {
        var _this = this;
        weight = Math.round(weight);
        this.helper.getCountries()
            .subscribe(function (res) {
            var count = res;
            count = count.filter(function (data) { return data.name === country; });
            var code = count[0].code;
            _this.code = count[0].code;
            var order = _this.getOrders.filter(function (data) {
                return (new Date(data.date.toDate()).getMonth() + 1) === new Date().getMonth() + 1 &&
                    new Date(data.date.toDate()).getDate() === new Date().getDate() &&
                    new Date(data.date.toDate()).getFullYear() === new Date().getFullYear();
            });
            //Order Id
            if (order.length === 0) {
                _this.id = code + "001";
            }
            else if (order.length < 10) {
                _this.id = code + "00" + (order.length + 1);
            }
            else if (order.length < 100) {
                _this.id = code + "0" + (order.length + 1);
            }
            else if (order.length < 1000) {
                _this.id = "" + code + (order.length + 1);
            }
            //Weight
            if (weight < 10) {
                _this.id = _this.id + "0" + weight;
            }
            else if (weight < 100) {
                _this.id = "" + _this.id + weight;
            }
            else {
                _this.id = "" + _this.id + weight;
            }
            var date = new Date().getDate();
            var month = new Date().getMonth() + 1;
            var year = new Date().getFullYear();
            var yearr = year.toString().substring(2, 4);
            // date
            _this.id = "" + _this.id + date + month + yearr;
            _this.newOrder.orderid = _this.id;
        });
    };
    CreateDialogComponent.prototype.pay = function () {
        this.newOrder.paymentmethod = 'Cash On Delivery';
        this.handler.open({
            name: 'Payment',
            description: 'Pay Using Credit Card'
        });
    };
    CreateDialogComponent.prototype.onPopState = function () {
        this.handler.close();
    };
    CreateDialogComponent.prototype.setStripes = function () {
        var _this = this;
        this.handler = StripeCheckout.configure({
            key: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].stripeKey,
            image: 'https://firebasestorage.googleapis.com/v0/b/trackinglive-89835.appspot.com/o/logo%2FShirt-picture.png?alt=media&token=040a6ad9-5ad6-4e03-ae7f-f3f871a53311',
            locale: 'auto',
            token: function (token) {
                _this.helper.simpleHttp(_this.newOrder.total * 100, token)
                    .subscribe(function (res) {
                    if (res.status === 200) {
                        _this.openSnackbar('Payment Accepted');
                        _this.newOrder.recipient[0].country = {
                            name: _this.newOrder.to,
                            code: _this.code
                        };
                        _this.api.createOrder(_this.newOrder)
                            .then(function (res) {
                            _this.close();
                            localStorage.removeItem('booking');
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        _this.openSnackbar('Payment Rejected.');
                    }
                });
            }
        });
    };
    CreateDialogComponent.prototype.openSnackbar = function (msg) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.duration = 5000;
        config.panelClass = ['red-snackbar'];
        this.snackBar.open(msg, 'Dismiss', config);
    };
    CreateDialogComponent.prototype.getPrices = function (dest, weight) {
        var amount = 0;
        if (this.rates.length !== 0) {
            var x = this.rates[0].rates;
            this.prices = x.filter(function (data) { return data.maxweight === weight && data.perkg === false; });
            if (this.prices.length !== 0)
                amount = this.prices[0].price;
            if (this.prices.length === 0) {
                this.prices = x.filter(function (data) { return data.maxweight >= weight && data.minweight <= weight && data.perkg === true; });
                if (this.prices.length !== 0)
                    amount = this.prices[0].price * weight;
            }
            return amount;
        }
    };
    CreateDialogComponent.prototype.fromSection = function () {
        this.showForm4 = false;
        this.showForm = true;
        this.count = 0;
        this.backBtn = false;
    };
    CreateDialogComponent.prototype.toSection = function () {
        this.showForm4 = false;
        this.count = 1;
        this.showForm1 = true;
        this.backBtn = true;
    };
    CreateDialogComponent.prototype.shipmentDetails = function () {
        this.showForm4 = false;
        this.count = 2;
        this.showForm2 = true;
        this.backBtn = true;
    };
    CreateDialogComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:popstate'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CreateDialogComponent.prototype, "onPopState", null);
    CreateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-dialog',
            template: __webpack_require__(/*! ./create-dialog.component.html */ "./src/app/dashboard/create-dialog/create-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-dialog.component.css */ "./src/app/dashboard/create-dialog/create-dialog.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('hideForms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('600ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('3000ms ease-in'))
                ])
            ]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], CreateDialogComponent);
    return CreateDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-new/create-new.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/create-new/create-new.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 600px;\r\n    width: 100%;\r\n    z-index: -1;\r\n    pointer-events: none;\r\n    opacity: 0.5;\r\n    background: #CCC;\r\n    \r\n}\r\n\r\n@media (min-width: 576px){ \r\n    .dialogWidth{\r\n        min-width: 95% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) { \r\n    .dialogWidth{\r\n        min-width: 340px !important;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/dashboard/create-new/create-new.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/create-new/create-new.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [streetViewControl]=\"false\" [zoomControl]=\"false\" >\r\n  </agm-map>\r\n"

/***/ }),

/***/ "./src/app/dashboard/create-new/create-new.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/create-new/create-new.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewComponent", function() { return CreateNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-dialog/create-dialog.component */ "./src/app/dashboard/create-dialog/create-dialog.component.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateNewComponent = /** @class */ (function () {
    function CreateNewComponent(dialog, helper, router, auth) {
        this.dialog = dialog;
        this.helper = helper;
        this.router = router;
        this.auth = auth;
        this.lat = 25.0997528;
        this.lng = 55.1556513;
    }
    CreateNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.checkLoginStatus().subscribe(function (user) {
            if (user) {
                if (!localStorage.getItem('booking'))
                    _this.router.navigate(['']);
            }
            else if (localStorage.get('booking') || user) {
                _this.router.navigate(['/signin']);
            }
            else
                _this.router.navigate(['']);
        });
        this.order = JSON.parse(localStorage.getItem('booking'));
        this.helper.getCountryPhoneCodes()
            .subscribe(function (res) {
            _this.par = res;
            _this.phonecode = _this.par.filter(function (data) { return data.name.toLowerCase() === _this.order.destination.toLowerCase(); });
            _this.order.destCode = "(" + _this.phonecode[0].dial_code + ")";
            _this.phonecode = _this.par.filter(function (data) { return data.name === 'United Arab Emirates'; });
            _this.order.fromCode = "(" + _this.phonecode[0].dial_code + ")";
            var x = { from: _this.order.from, destination: _this.order.destination, weight: _this.order.weight, price: _this.order.price, destCode: _this.order.destCode, fromCode: _this.order.fromCode, city: _this.order.city };
            localStorage.setItem('booking', JSON.stringify(x));
            setTimeout(function () {
                _this.openDialog();
            }, 500);
        });
    };
    CreateNewComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateDialogComponent"], {
            minWidth: '340px',
            maxHeight: '95%',
            panelClass: ['animated', 'slideInUp'],
            disableClose: true,
            autoFocus: false,
            data: { se: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === undefined) {
                _this.router.navigate(['/orders']);
            }
        });
    };
    CreateNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new',
            template: __webpack_require__(/*! ./create-new.component.html */ "./src/app/dashboard/create-new/create-new.component.html"),
            styles: [__webpack_require__(/*! ./create-new.component.css */ "./src/app/dashboard/create-new/create-new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CreateNewComponent);
    return CreateNewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\r\n    min-width: 300px !important;\r\n    display: inline-block !important;\r\n }"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Banner -->\r\n    <div class=\"banner1\" style=\"height: 400px;\">\r\n      <div class=\"w3_agileits_service_banner_info\">\r\n        <h2>We Deliver With Care</h2>\r\n      </div>\r\n    </div>\r\n\r\n<!-- //banner -->\r\n<!-- Modal1 -->\r\n\r\n                        <!-- //Modal1 -->\t\r\n                        <!-- Modal2 -->\r\n                        <div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\">\r\n                          <div class=\"modal-dialog\">\r\n                          <!-- Modal content-->\r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                \r\n                                <div class=\"signin-form profile\">\r\n                                <h3 class=\"agileinfo_sign\">Sign Up</h3>\t\r\n                                    <div class=\"login-form\">\r\n                                      <form action=\"#\" method=\"post\">\r\n                                         <input type=\"text\" name=\"name\" placeholder=\"Username\" required=\"\">\r\n                                        <input type=\"email\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                        <input type=\"password\" name=\"password\" placeholder=\"Password\" required=\"\">\r\n                                        <input type=\"password\" name=\"password\" placeholder=\"Confirm Password\" required=\"\">\r\n                                        <input type=\"submit\" value=\"Sign Up\">\r\n                                      </form>\r\n                                    </div>\r\n                                    <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\r\n                                  </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- //Modal2 -->\t\r\n<!-- Modal2 -->\r\n                        <div class=\"modal fade\" id=\"myModal4\" tabindex=\"-1\" role=\"dialog\">\r\n                          <div class=\"modal-dialog\">\r\n                          <!-- Modal content-->\r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                \r\n                                <div class=\"signin-form profile\">\r\n                                    <div class=\"login-form\">\r\n                                        <h5>Need To <span>Transport</span>?</h5>\r\n                                      <p>We carefully deliver your packages.</p>\r\n                                      \r\n                                      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\" style=\"text-align: center;\">\r\n                                        <div class=\"row\" style=\"width: 100%;\">\r\n                                            <!--  -->\r\n                                            <span matPrefix style=\"position: relative; top: 14px; right: 10px !important;\"><img src=\"https://www.countryflags.io/AE/shiny/32.png\" alt=\"country\" style=\"width: 32px; height: 32px;\">&nbsp;</span>\r\n                                          <mat-form-field style=\"max-width: 300px !important;\" >\r\n                                  \r\n                                            <input matInput placeholder=\"From\" [matAutocomplete]=\"auto\" formControlName=\"from\"\r\n                                             (change)=\"showCities($event)\" style=\"width: 300px !important;\">\r\n                                            <mat-autocomplete #auto=\"matAutocomplete\" >\r\n                                              <mat-option *ngFor=\"let state of filteredCities\" [value]=\"state.name\">\r\n                                                <span>{{state.name}}</span>\r\n                                              </mat-option>\r\n                                            </mat-autocomplete>\r\n                                          </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"row\" style=\"width: 100%;\">\r\n                                          <span matPrefix style=\"position: relative; top: 14px; right: 10px !important; cursor: pointer;\" (click)=\"openCountries()\" ><img src=\"https://www.countryflags.io/{{selectedCountry.code}}/shiny/32.png\" alt=\"country\" style=\"width: 32px; height: 32px;\" >&nbsp;</span>\r\n                                          <mat-form-field style=\"max-width: 300px !important;\">\r\n                                  \r\n                                            <input matInput placeholder=\"Destination\" [matAutocomplete]=\"auto1\"   formControlName=\"destination\">\r\n                                            <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                                              <mat-option *ngFor=\"let state of filteredCountries \" [value]=\"state\">\r\n                                                <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\r\n                                                <span>{{state}}</span>\r\n                                              </mat-option>\r\n                                            </mat-autocomplete>\r\n                                          </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <mat-form-field style=\"position: relative; right: 30px;\">\r\n                                  \r\n                                                <input matInput placeholder=\"Weight\" type=\"number\" min=\"0\" formControlName=\"weight\">\r\n                                              </mat-form-field>\r\n                                              <span style=\"margin-left: 5px !important;\"></span>\r\n                                              <mat-form-field style=\"position: relative; left: 15px !important;\">\r\n                                                <mat-select placeholder=\"How would you like it to be delivered?\" formControlName=\"price\" #price [disabled]=\" form.value.price === '' \" (selectionChange)=\"onSelect($event.value)\" style=\"position: relative; right: -30px;\">\r\n                                                    <mat-option *ngIf=\"form.value.price !== '' \" value=\"Saver Starting at: {{form.value.price}}\">Saver Starting at: {{form.value.price}}</mat-option>\r\n                                                    <mat-option *ngIf=\"form.value.price !== '' \" value=\"Pickup Service at: {{form.value.price + pickup.charges}}\">Pickup Service at: {{form.value.price + pickup.charges}}</mat-option>\r\n                                                    </mat-select>\r\n                                              </mat-form-field>\r\n                                        </div>\r\n                                        <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid || form.pristine\" style=\"width: 400px !important;\" >Book Now</button>\r\n                                      </form>\r\n\r\n                                    </div>\r\n                                    \r\n                                  </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- //Modal2 -->\t\r\n<!-- bootstrap-pop-up -->\r\n<div class=\"modal video-modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n      \r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\t\t\t\t\t\t\r\n      </div>\r\n      <section>\r\n        <div class=\"modal-body\">\r\n          <h5>Move Cargo</h5>\r\n          <img src=\"./assets/images/2.jpg\" alt=\" \" class=\"img-responsive\" />\r\n          <p>Ut enim ad minima veniam, quis nostrum \r\n            exercitationem ullam corporis suscipit laboriosam, \r\n            nisi ut aliquid ex ea commodi consequatur? Quis autem \r\n            vel eum iure reprehenderit qui in ea voluptate velit \r\n            e.\r\n            <i>\" Quis autem vel eum iure reprehenderit qui in ea voluptate velit \r\n              esse quam nihil molestiae consequatur.</i></p>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- //bootstrap-pop-up -->\r\n<div class=\"inner_main_agile_section\">\r\n  <div class=\"container\">\r\n      <h2 style=\"text-align: center;\"> <span class=\"fixed_w3\">We</span>  Carefully handle all <span class=\"fixed_w3\">Services</span> </h2>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\" style=\"text-align: center;\">\r\n          <div class=\"row\" style=\"width: 100%;\">\r\n              <!--  -->\r\n              <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n                <span matPrefix style=\"position: relative; top: 14px; right: 10px !important;\"><img src=\"https://www.countryflags.io/AE/shiny/32.png\" alt=\"country\">&nbsp;</span>\r\n                <mat-form-field style=\"max-width: 300px !important;\" >\r\n        \r\n                  <input matInput placeholder=\"From\" [matAutocomplete]=\"auto\" formControlName=\"from\"\r\n                   (change)=\"showCities($event)\" style=\"width: 300px !important;\">\r\n                  <mat-autocomplete #auto=\"matAutocomplete\" >\r\n                    <mat-option *ngFor=\"let state of filteredCities\" [value]=\"state.name\">\r\n                      <span>{{state.name}}</span>\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n              </div>\r\n              \r\n              <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n                <span matPrefix style=\"position: relative; top: 14px !important; right: 10px !important; cursor: pointer;\" (click)=\"openCountries()\" ><img src=\"https://www.countryflags.io/{{selectedCountry.code}}/shiny/32.png\" alt=\"country\">&nbsp;</span>\r\n                <mat-form-field style=\"max-width: 300px !important;\">\r\n        \r\n                  <input matInput placeholder=\"Destination\" [matAutocomplete]=\"auto1\"   formControlName=\"destination\">\r\n                  <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let state of filteredCountries \" [value]=\"state\">\r\n                      <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\r\n                      <span>{{state}}</span>\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n              </div>\r\n            \r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n                <mat-form-field style=\"position: relative; left: 10px;\">\r\n    \r\n                    <input matInput placeholder=\"Weight\" type=\"number\" min=\"0\" formControlName=\"weight\">\r\n                  </mat-form-field>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"How would you like it to be delivered?\" formControlName=\"price\"  [disabled]=\" !showPrice[0] \" (selectionChange)=\"onSelect($event.value)\">\r\n                        <mat-option *ngIf=\"form.value.price !== '' \" value=\"{{showPrice[0]}}\">Saver Starting at: {{showPrice[0]}}</mat-option>\r\n                        <mat-option *ngIf=\"form.value.price !== '' \" value=\"{{showPrice[1]}}\">Pickup Service at: {{showPrice[1]}}</mat-option>\r\n                        </mat-select>\r\n                  </mat-form-field>\r\n            </div>\r\n             \r\n                <!-- <span style=\"margin-left: 5px !important;\"></span> -->\r\n               \r\n          </div>\r\n          <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid || form.pristine\" style=\"width: 400px !important;\" >Book Now</button>\r\n        </form>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n<!-- //about -->\r\n<div class=\"medile_agile_its_section\">\r\n <div class=\"col-md-6 medile_agile_its_blue\">\r\n     <h4>Ready to Get Started? <i class=\"fa fa-hand-o-right\" aria-hidden=\"true\"></i> </h4>\r\n </div>\r\n <div class=\"col-md-6 medile_agile_its_green\">\r\n     <div class=\"more click\">\r\n              <a  class=\"hvr-shutter-in-vertical\">Click Here  <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n </div>\r\n <div class=\"clearfix\"> </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<!-- banner-bottom -->\r\n<div class=\"banner-bottom mid-section-agileits\">\r\n  <div class=\"col-md-7 bannerbottomleft\">\r\n    <div class=\"video-grid-single-page-agileits\">\r\n      <div > <img src=\"./assets/images/video.jpg\" alt=\"\" class=\"img-responsive\" /> </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-5 bannerbottomright\">\r\n  <h3>How Does We Work?</h3>\r\n  <p>Ut enim ad minima veniam, quis nostrum \r\n    exercitationem ulla corporis suscipit laboriosam, \r\n    nisi ut aliquid ex ea.</p>\r\n  <h4><i class=\"fa fa-taxi\" aria-hidden=\"true\"></i>International Transport Deliver System</h4>\r\n  <h4><i class=\"fa fa-shield\" aria-hidden=\"true\"></i>Fast & Best Deliver Service</h4>\r\n  <h4><i class=\"fa fa-ticket\" aria-hidden=\"true\"></i>Standard Courier value</h4>\r\n  <h4><i class=\"fa fa-space-shuttle\" aria-hidden=\"true\"></i>Easy And Air freight Service</h4>\r\n  <h4><i class=\"fa fa-truck\" aria-hidden=\"true\"></i>Packaging & Storage</h4>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  </div>\r\n  <!-- //banner-bottom -->\r\n\r\n<!-- banner-bottom -->\r\n<div class=\"banner-bottom\">\r\n<div class=\"container\">\r\n  <h6>Management Move Cargo</h6>\r\n  <h2> <span class=\"fixed_w3\">We</span>  Carefully handle all <span class=\"fixed_w3\">Services</span> </h2>\r\n  <p class=\"sub_para_agile\">Ipsum dolor sit amet consectetur adipisicing elit</p>\r\n  <div class=\"agileits_banner_bottom_grids\">\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/1.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n           <p>Service 1</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/2.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n           <p>Service 2</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/3.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n          <p>Service 3</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/4.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n          <p>Service 4</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"> </div>\r\n  </div>\r\n  <div class=\"agileits_banner_bottom_grids two\">\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/5.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n           <p>Service 5</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/6.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n           <p>Service 6</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/7.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n          <p>Service 7</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 agileits_banner_bottom_grid\">\r\n      <div class=\"hovereffect w3ls_banner_bottom_grid\">\r\n        <img src=\"./assets/images/8.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"overlay\">\r\n           <h4>Move Cargo</h4>\r\n          <p>Service 8</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"> </div>\r\n  </div>\r\n</div>\r\n<!-- /blog -->\r\n</div>\r\n\r\n<div class=\"events\">\r\n<ul id=\"flexiselDemo1\">\t\r\n  <li>\r\n    <div class=\"w3layouts_event_grid\">\r\n      <div class=\"w3_agile_event_grid1\">\r\n        <img src=\"./assets/images/1.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"w3_agile_event_grid1_pos\">\r\n          <p>23 June 2017</p>\r\n        </div>\r\n        <div class=\"agile_event_grid1_pos\">\r\n          <ul>\r\n            <li><a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>18</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>21</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i>13</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"agileits_w3layouts_event_grid1\">\r\n        <h5><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Freights Delivered</a></h5>\r\n        <p>viverra ipsum ac, convallis mauris. Sed quis congue turpis, cursus rhoncus nibh.</p>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"w3layouts_event_grid\">\r\n      <div class=\"w3_agile_event_grid1\">\r\n        <img src=\"./assets/images/8.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"w3_agile_event_grid1_pos\">\r\n          <p>25 June 2017</p>\r\n        </div>\r\n        <div class=\"agile_event_grid1_pos\">\r\n          <ul>\r\n            <li><a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>18</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>21</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i>13</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"agileits_w3layouts_event_grid1\">\r\n        <h5><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Vehicles Owned</a></h5>\r\n        <p>viverra ipsum ac, convallis mauris. Sed quis congue turpis, cursus rhoncus nibh.</p>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"w3layouts_event_grid\">\r\n      <div class=\"w3_agile_event_grid1\">\r\n        <img src=\"./assets/images/7.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"w3_agile_event_grid1_pos\">\r\n          <p>28 June 2017</p>\r\n        </div>\r\n        <div class=\"agile_event_grid1_pos\">\r\n          <ul>\r\n            <li><a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>18</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>21</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i>13</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"agileits_w3layouts_event_grid1\">\r\n        <h5><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Clients Worldwide</a></h5>\r\n        <p>viverra ipsum ac, convallis mauris. Sed quis congue turpis, cursus rhoncus nibh.</p>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"w3layouts_event_grid\">\r\n      <div class=\"w3_agile_event_grid1\">\r\n        <img src=\"./assets/images/2.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"w3_agile_event_grid1_pos\">\r\n          <p>30 June 2017</p>\r\n        </div>\r\n        <div class=\"agile_event_grid1_pos\">\r\n          <ul>\r\n            <li><a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>18</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>21</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i>13</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"agileits_w3layouts_event_grid1\">\r\n        <h5><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Air Shipping</a></h5>\r\n        <p>viverra ipsum ac, convallis mauris. Sed quis congue turpis, cursus rhoncus nibh.</p>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"w3layouts_event_grid\">\r\n      <div class=\"w3_agile_event_grid1\">\r\n        <img src=\"./assets/images/6.jpg\" alt=\" \" class=\"img-responsive\" />\r\n        <div class=\"w3_agile_event_grid1_pos\">\r\n          <p>2 April 2017</p>\r\n        </div>\r\n        <div class=\"agile_event_grid1_pos\">\r\n          <ul>\r\n            <li><a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>18</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>21</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i>13</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"agileits_w3layouts_event_grid1\">\r\n        <h5><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Direct services</a></h5>\r\n        <p>viverra ipsum ac, convallis mauris. Sed quis congue turpis, cursus rhoncus nibh.</p>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n</div>\r\n<!-- agile_testimonials -->\r\n<div class=\"test\">\r\n<div class=\"container\">\r\n<h3 class=\"w3l_header w3_agileits_header\">Happy <span>Clients</span></h3>\r\n  <p class=\"sub_para_agile two\">Ipsum dolor sit amet consectetur adipisicing elit</p>\r\n    \r\n    <div class=\"agile_inner_grids\">\r\n        <div class=\"test-gri1\">\r\n         <div id=\"owl-demo2\" class=\"owl-carousel\">\r\n            <div class=\"agile\">\r\n                 <div class=\"test-grid\">\r\n                   <div class=\"col-md-8 test-grid1\">\r\n                  <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>\r\n                  <p class=\"para-w3-agile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.\r\n                  Lorem ipsum dolor .</p>\r\n                  <h4>Steve Warner</h4>\r\n                  <span>Lorem Ipsum</span>\r\n                </div>\t\r\n                <div class=\"col-md-4 test-grid2\">\r\n                  <img src=\"./assets/images/t1.jpg\" alt=\"\" class=\"img-r\">\r\n                </div>\r\n              </div>\t\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"agile\">\r\n                 <div class=\"test-grid\">\r\n                   <div class=\"col-md-8 test-grid1\">\r\n                <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>\r\n                  <p class=\"para-w3-agile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.\r\n                  Lorem ipsum dolor.</p>\r\n                  <h4>Andery</h4>\r\n                  <span>Lorem Ipsum</span>\r\n                </div>\t\r\n                <div class=\"col-md-4 test-grid2\">\r\n                  <img src=\"./assets/images/t2.jpg\" alt=\"\" class=\"img-r\">\r\n                </div>\r\n              </div>\t\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"agile\">\r\n                 <div class=\"test-grid\">\r\n                   <div class=\"col-md-8 test-grid1\">\r\n                <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>\r\n                  <p class=\"para-w3-agile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.\r\n                  Lorem ipsum dolor .</p>\r\n                  <h4>Williams</h4>\r\n                  <span>Lorem Ipsum</span>\r\n                </div>\t\r\n                <div class=\"col-md-4 test-grid2\">\r\n                  <img src=\"./assets/images/t3.jpg\" alt=\"\" class=\"img-r\">\r\n                </div>\r\n              </div>\t\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"agile\">\r\n                 <div class=\"test-grid\">\r\n                   <div class=\"col-md-8 test-grid1\">\r\n                <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>\r\n                  <p class=\"para-w3-agile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.\r\n                  Lorem ipsum dolor .</p>\r\n                  <h4>Shane Smith</h4>\r\n                  <span>Lorem Ipsum</span>\r\n                </div>\t\r\n                <div class=\"col-md-4 test-grid2\">\r\n                  <img src=\"./assets/images/t4.jpg\" alt=\"\" class=\"img-r\">\r\n                </div>\r\n              </div>\t\r\n              <div class=\"clearfix\"></div>\r\n            </div>\t\r\n        </div>\r\n      </div>\t\r\n  </div>\r\n</div>\t\r\n</div>\r\n<!-- //agile_testimonials -->\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../countries/countries.component */ "./src/app/dashboard/countries/countries.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(helper, dialog, fb, api, router) {
        var _this = this;
        this.helper = helper;
        this.dialog = dialog;
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.filteredCities = [];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.filteredCountries = [];
        this.stateCtrl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.states = [
            {
                name: "Abu Dhabi"
            },
            {
                name: "Al Ain"
            },
            {
                name: "Al Khan"
            },
            {
                name: "Ar Ruways"
            },
            {
                name: "As Satwah"
            },
            {
                name: "Dayrah"
            },
            {
                name: "Dubai"
            },
            {
                name: "Fujairah"
            },
            {
                name: "Ras al-Khaimah"
            },
            {
                name: "Sharjah"
            }
        ];
        this.selectedCountry = {
            name: 'United Kingdom',
            code: 'GB'
        };
        this.showPrice = [];
        this.helper.getCities()
            .subscribe(function (res) {
            _this.temp = res;
            // this.countries = this.countries.filter(data => data === this.selectedCountry.name)
            Object.keys(_this.temp).forEach(function (a) {
                if (a === _this.selectedCountry.name)
                    _this.countries = _this.temp[a];
            });
        });
        this.helper.getUAECities()
            .subscribe(function (res) {
            _this.uae = res;
        });
    }
    HomeComponent.prototype.showCities = function (event) {
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem('booking');
        this.form = this.fb.group({
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.onChanges();
        this.api.getPricingById('pickup')
            .subscribe(function (res) {
            _this.pickup = res;
        });
    };
    HomeComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        var x = this.uae.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
        return x;
    };
    HomeComponent.prototype._filterStates1 = function (value) {
        var filterValue = value.toLowerCase();
        return this.countries.filter(function (state) { return state.toLowerCase().indexOf(filterValue) === 0; });
    };
    HomeComponent.prototype.onChanges = function () {
        var _this = this;
        this.form.get('from').valueChanges.subscribe(function (res) {
            if (res.length > 0) {
                _this.filteredCities = _this._filterStates(res);
            }
            else
                _this.filteredCities = undefined;
        });
        this.form.get('destination').valueChanges.subscribe(function (res) {
            if (res.length > 0) {
                _this.filteredCountries = _this._filterStates1(res);
            }
            else {
                _this.filteredCountries = [];
            }
            var x = _this.countries.filter(function (data) { return data.name === res; });
            if (x.length !== 0)
                _this.countryCode = x[0].code;
            if (res !== '') {
                _this.form.get('weight').valueChanges.subscribe(function (weigh) {
                    if (weigh != 0) {
                        _this.getPrices(res);
                    }
                });
            }
        });
    };
    HomeComponent.prototype.getPrices = function (dest) {
        var _this = this;
        this.api.getPrice(this.selectedCountry.name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (a) {
            var did = a.payload.doc.id;
            var data = a.payload.doc.data();
            return __assign({ did: did }, data);
        }); }))
            .subscribe(function (res) {
            _this.rates = res;
            _this.form.value.price = 0;
            _this.showPrice = [];
            if (_this.rates.length !== 0) {
                var x = _this.rates[0].rates;
                _this.prices = x.filter(function (data) { return data.maxweight >= _this.form.get('weight').value && _this.form.get('weight').value > data.minweight && data.perkg === false; });
                if (_this.prices.length !== 0)
                    _this.form.value.price = _this.prices[0].price;
                if (_this.prices.length === 0) {
                    _this.prices = x.filter(function (data) { return data.maxweight >= _this.form.get('weight').value && data.minweight <= _this.form.get('weight').value && data.perkg === true; });
                    if (_this.prices.length !== 0)
                        _this.form.value.price = _this.prices[0].price * parseInt(_this.form.get('weight').value);
                }
                _this.showPrice.push(_this.form.value.price);
                _this.showPrice.push(parseInt(_this.form.value.price) + _this.pickup.charges);
            }
        });
    };
    HomeComponent.prototype.submit = function (form) {
        var data = {
            from: this.form.get('from').value,
            destination: this.selectedCountry.name,
            city: this.form.get('destination').value,
            weight: this.form.get('weight').value,
            price: form.value.price
        };
        localStorage.setItem('booking', JSON.stringify(data));
        if (localStorage.getItem('tuid'))
            this.router.navigate(['/create-new']);
        else
            this.router.navigate(['/signin']);
    };
    HomeComponent.prototype.onSelect = function (event) {
        var x = parseInt(event);
        if (x === this.showPrice[0]) {
            this.total = parseInt(this.showPrice[0]);
            this.form.value.price = 'Saver Starting at: ' + this.total;
        }
        else if (x === this.showPrice[1]) {
            this.total = parseInt(this.showPrice[1]);
            this.form.value.price = 'Pickup Service at: ' + this.total;
        }
    };
    HomeComponent.prototype.openCountries = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"], {
            minWidth: '100px',
            maxHeight: '200px',
            panelClass: ['animated', 'slideInUp'],
            data: { name: 'United Kingdom', code: 'GB' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.selectedCountry = result;
                _this.form.controls['destination'].setValue('');
                Object.keys(_this.temp).forEach(function (a) {
                    if (a === _this.selectedCountry.name)
                        _this.countries = _this.temp[a];
                });
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/orders/orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/orders/orders.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/orders/orders.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/orders/orders.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 100%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n        <img style=\"width: 180px; height: 180px;\" src=\"./../../../assets/images/logo.png\" alt=\"KS Logistics\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" style=\"width: 95%; margin-top: 20px; margin-left: 20px;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-xl-12 col-lg-8 col-md-8\">\r\n          <input type=\"text\" [(ngModel)]=\"userFilter.orderid\" class=\"form-control text-center\" id=\"search\" placeholder=\"Search order\"\r\n           style=\"outline: none; max-width: 300px; margin: 0 auto !important;\">\r\n        <br>\r\n          <table class=\"table table-hover\" style=\"width: 100%;\">\r\n          <thead>\r\n            <tr class=\"text-center\">\r\n              <th>Order Id</th>\r\n              <th>From</th>\r\n              <th>To</th>\r\n              <th>Service</th>\r\n              <th>Date</th>\r\n              <th>Status</th>\r\n              <th>Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of neworders | filterBy:userFilter; let i = index\" (click)=\"newOrderClicked(item,i)\" style=\"cursor: pointer;\" >\r\n              <td>{{item.orderid}}</td>\r\n              <td class=\"small\">{{item.sender[0].city}}, {{item.from}}</td>\r\n              <td class=\"small\">{{item.recipient[0].city}}, {{item.to}}</td>\r\n              <td>{{item.pickup === true ? 'Pickup Service' : 'Self Drop' }}</td>\r\n              <td class=\"small\">{{date[i]}}</td>\r\n              <td>{{item?.orderstatus}}</td>\r\n              <td>AED {{item.total}}</td>\r\n            </tr>\r\n            <tr *ngFor=\"let item of orders | filterBy:userFilter; let i = index\" style=\"cursor: pointer;\">\r\n              <td>{{item.orderid}}</td>\r\n              <td class=\"small\">{{item.sender[0].city}}, {{item.from}}</td>\r\n              <td class=\"small\">{{item.recipient[0].city}}, {{item.to}}</td>\r\n              <td>{{item.pickup === true ? 'Pickup Service' : 'Self Drop' }}</td>\r\n              <td class=\"small\">{{date1[i]}}</td>\r\n              <td>{{item.orderstatus}}</td>\r\n              <td>AED {{item.total}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal2 -->\r\n  <div class=\"modal fade\" id=\"Orders\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            \r\n            <div class=\"signin-form profile\">\r\n            <h3 class=\"agileinfo_sign\">Order Details</h3>\t\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <h5 style=\"text-align: left;\">{{selected?.from}}</h5>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <h5 style=\"text-align: right;\">{{selected?.to}}</h5>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n               <div class=\"col-md-2\">\r\n                  <p style=\"font-weight: bolder;\" class=\"muted\">From:</p>\r\n               </div>\r\n               <div class=\"col-md-10\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <p style=\"text-align: left;\">{{selected?.sender[0].sendername}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <p style=\"text-align: left;\">{{selected?.sender[0].office + selected?.sender[0].building}}, {{selected?.sender[0]?.street + selected?.sender[0].region}},\r\n                        {{selected?.sender[0].city}}, {{selected?.sender[0].country}}    \r\n                    </p>\r\n                    </div>\r\n                  </div>\r\n               </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                       <p style=\"font-weight: bolder;\">To:</p>\r\n                    </div>\r\n                    <div class=\"col-md-10\">\r\n                       <div class=\"row\">\r\n                         <div class=\"col-md-12\">\r\n                           <p style=\"text-align: left;\">{{selected?.recipient[0].recipientname}}</p>\r\n                         </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                         <div class=\"col-md-12\">\r\n                           <p style=\"text-align: left;\">{{selected?.recipient[0].office + selected?.recipient[0].building}}, {{selected?.recipient[0]?.street + selected?.recipient[0].region}},\r\n                             {{selected?.recipient[0].city}}, {{selected?.recipient[0].country}}    \r\n                         </p>\r\n                         </div>\r\n                       </div>\r\n                    </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                       <p style=\"font-weight: bolder;\">Shipment:</p>\r\n                    </div>\r\n                    <div class=\"col-md-10\">\r\n                       <div class=\"row\">\r\n                         <div class=\"col-md-12\">\r\n                           <p style=\"text-align: left;\">{{selected?.shipment[0].itemdescription}}, {{selected?.shipment[0].chargableweight}} Kg</p>\r\n                         </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                         <div class=\"col-md-12\">\r\n                           <h5 style=\"width: 100%;\"><small style=\"float: left;\">Units: {{selected?.units}}</small>\r\n                              <small style=\"float: right;\">Pickup: {{selected?.pickup ? 'Yes' : 'No'}}</small>\r\n                           </h5>\r\n                         </div>\r\n                       </div>\r\n                    </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                       <p style=\"font-weight: bolder;\">Billing:</p>\r\n                    </div>\r\n                    <div class=\"col-md-10\">\r\n                       <div class=\"row\">\r\n                         <div class=\"col-md-12\">\r\n                           <p style=\"text-align: left;\">Total: {{selected?.total}}</p>\r\n                         </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                         <div class=\"col-md-12\">\r\n                           <h5 style=\"width: 100%;\"><small style=\"float: left;\">Order: {{selected?.amount}}</small>\r\n                              <small style=\"float: right;\">Pickup: {{selected?.pickupcharges !== 0 ? selected?.pickupcharges : 0}}</small>\r\n                           </h5>\r\n                         </div>\r\n                       </div>\r\n                    </div>\r\n              </div>\r\n\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- //Modal2 -->\t\r\n\r\n  <div style=\"height: 100px\"></div>"

/***/ }),

/***/ "./src/app/dashboard/orders/orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(api) {
        this.api = api;
        this.date = [];
        this.date1 = [];
        this.userFilter = {
            orderid: ''
        };
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getData(localStorage.getItem('tuid'));
    };
    OrdersComponent.prototype.getData = function (id) {
        var _this = this;
        this.api.getNewOrdersById(id)
            .subscribe(function (res) {
            _this.neworders = res;
            _this.neworders.forEach(function (a) {
                _this.date.push(new Date(a.date.toDate()).toDateString());
            });
        });
        this.api.getOrdersById(id)
            .subscribe(function (res) {
            _this.orders = res;
            _this.orders.forEach(function (a) {
                _this.date1.push(new Date(a.date.toDate()).toDateString());
            });
        });
    };
    OrdersComponent.prototype.newOrderClicked = function (item, i) {
        $('#Orders').modal('show');
        this.selected = item;
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/dashboard/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/dashboard/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/tracking/tracking.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/tracking/tracking.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/tracking/tracking.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/tracking/tracking.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px;\">\r\n    <h4 style=\"text-align: center\">TRACK YOUR ORDER  <i class=\"fa fa-dropbox\" aria-hidden=\"true\"></i></h4>\r\n    <hr><br>\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3 text-center\" >\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Tracking Number\" [(ngModel)]=\"search\" >\r\n      </div>\r\n      <br>\r\n      <div class=\"offset-col-7 col-4 text-center\">\r\n        <button class=\"btn btn-primary\" (click)=\"track()\" style=\"width: 150px;\" >Track</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <br><br>\r\n    <div style=\"height: 100%; width: 100%;\" *ngIf=\"order\">\r\n      <div *ngIf=\"order.length !== 0\">\r\n          \r\n  \r\n            <h4>Order ID: {{order[0].orderid}}</h4>\r\n          \r\n            <h4>Destination: {{order[0].to}}</h4>\r\n            <table *ngIf=\"tracking\"  class=\"table align-items-center\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Status</th>\r\n                  <th>Date</th>\r\n                  <th>Time</th>\r\n                  <th>Location</th>\r\n                  <th>Remarks</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of tracking.status\">\r\n                  <td>{{item.status}}</td>\r\n                  <td>\r\n                    {{item.date}}\r\n                  </td>\r\n                  <td>{{item.time}}</td>\r\n                  <td>{{item.location}}</td>\r\n                  <td>{{item.remarks}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n      </div>\r\n      <div class=\"container\" *ngIf=\"order && order.length === 0\">\r\n        <div class='row'>\r\n          <div class=\"col-md-12  text-center\" style=\"text-align: center !important\">\r\n\r\n            <div class=\"text-center\">\r\n                <img src=\"./assets/images/empty.png\" class=\"img-responsive img-thumbnail\" style=\"border:transparent\" alt=\"\">  \r\n\r\n            </div>\r\n              <br><br>\r\n              <h3 sty>No Order Found :( ...</h3>\r\n         <br><br>\r\n          </div>\r\n        </div>\r\n     \r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"services two\">\r\n      <div class=\"container\">\r\n        <div class=\"agile_inner_grids\">\t\r\n          <div class=\"col-md-6 wthree_services_grid_left\">\r\n            <h3> Track Your <span>Order</span> </h3>\r\n            <h4>Why Choose Us</h4>\r\n            <p> Sed quis eleifend leo. Phasellus iaculis, \r\n              metus facilisis gravida dapibus, ligula dolor placerat dolor, eget \r\n              cursus neque risus quis tortor varius augue ut mauris condimentum dictum.</p>\r\n              <p> Sed quis eleifend leo. Phasellus iaculis, \r\n              metus facilisis gravida dapibus, ligula dolor placerat dolor, eget \r\n              cursus neque risus quis tortor varius augue ut mauris condimentum dictum.</p>\r\n            \r\n          </div>\r\n          <div class=\"clearfix\"> </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/tracking/tracking.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/tracking/tracking.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackingComponent = /** @class */ (function () {
    function TrackingComponent(api) {
        this.api = api;
    }
    TrackingComponent.prototype.ngOnInit = function () {
    };
    TrackingComponent.prototype.track = function () {
        var _this = this;
        if (this.search !== '') {
            this.search = this.search.toUpperCase();
            this.api.getNewOrderByOrderId(this.search)
                .subscribe(function (res) {
                _this.order = res;
                if (_this.order.length === 0) {
                    _this.api.getOrderByOrderId(_this.search)
                        .subscribe(function (ress) {
                        _this.order = ress;
                    });
                }
            });
            this.api.getTrackingInformation(this.search)
                .subscribe(function (res) {
                _this.tracking = res;
            });
        }
    };
    TrackingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracking',
            template: __webpack_require__(/*! ./tracking.component.html */ "./src/app/dashboard/tracking/tracking.component.html"),
            styles: [__webpack_require__(/*! ./tracking.component.css */ "./src/app/dashboard/tracking/tracking.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TrackingComponent);
    return TrackingComponent;
}());



/***/ }),

/***/ "./src/app/entry/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/entry/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entry/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/entry/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"max-width: 320px; margin: 0 auto; background: #efeded; margin-top: 15px;\">\r\n    <img class=\"card-img-top\" src=\"./../../assets/images/logo.png\" alt=\"Card image cap\" style=\"max-width: 120px !important; position: relative; left: 30%;\">\r\n    <div class=\"card-body\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"showError\">\r\n              <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n              <strong>Login Failed!</strong> {{errMsg}}\r\n            </div>\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"login(form)\" >\r\n            <mat-form-field style=\"width: 100%\">\r\n              <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width: 100%\">\r\n              <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n            </mat-form-field>\r\n            <a href=\"\" style=\"font-size: 0.8em; color: #5B648F; position: relative; top: -10px !important; \" data-toggle=\"modal\" data-target=\"#myModal2\">Recover Password</a>\r\n            <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid || form.pristine\" style=\"width: 100%\" >Sign In</button>\r\n          </form>\r\n          <br>\r\n          <span style=\"position: relative; left: 40%;\"><a routerLink=\"/signup\" >SIGN UP</a></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"height: 80px\"></div>\r\n\r\n  <div class=\"modal fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            \r\n            <div class=\"signin-form profile\">\r\n            <h3 class=\"agileinfo_sign\">Forgot Password</h3>\t\r\n                <div class=\"login-form\">\r\n                    <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"showError\">\r\n                        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n                        <strong>Error!</strong> {{errMsg}}\r\n                      </div>\r\n                    <input type=\"email\" name=\"email\" placeholder=\"E-mail\" required=\"\" [(ngModel)]=\"email\">\r\n                    <br><br>\r\n                    <button class=\"btn btn-primary\" (click)=\"forgotpassword()\">Send Password Reset Email</button>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/entry/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/entry/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, api, auth) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.showError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.checkLoginStatus().subscribe(function (user) {
            if (user && !localStorage.getItem('booking'))
                _this.router.navigate(['']);
        });
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.auth.login(email, password)
            .then(function (res) {
            _this.auth.setPersistance().then(function () {
                _this.api.getUser(res.user.uid)
                    .subscribe(function (data) {
                    if (data) {
                        localStorage.setItem('tuid', res.user.uid);
                        if (localStorage.getItem('booking'))
                            _this.router.navigate(['/create-new']);
                        else
                            _this.router.navigate(['']);
                    }
                });
            });
        }, function (err) {
            _this.showError = true;
            _this.errMsg = err.message;
            setTimeout(function () {
                _this.showError = false;
            }, 5000);
        });
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.forgotpassword = function () {
        var _this = this;
        if (this.email) {
            this.auth.forgotPassword(this.email)
                .then(function (res) {
            }, function (err) {
                _this.showError = true;
                _this.errMsg = err.message;
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/entry/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/entry/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/entry/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/entry/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entry/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/entry/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"max-width: 320px; margin: 0 auto; background: #efeded; margin-top: 15px;\">\r\n    <img class=\"card-img-top\" src=\"./../../assets/images/logo.png\" alt=\"Card image cap\" style=\"max-width: 120px !important; position: relative; left: 30%;\">\r\n    <div class=\"card-body\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"showError\">\r\n              <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n              <strong>Login Failed!</strong> {{errMsg}}\r\n            </div>\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\" >\r\n              <mat-form-field style=\"width: 100%\">\r\n                  <input matInput placeholder=\"First Name *\" type=\"text\" formControlName=\"fname\">\r\n                </mat-form-field>\r\n                <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"Last Name *\" type=\"text\" formControlName=\"lname\">\r\n                  </mat-form-field>\r\n                  <mat-form-field style=\"width: 100%\">\r\n                      <input matInput placeholder=\"Country *\" type=\"text\" formControlName=\"country\">\r\n                    </mat-form-field>\r\n            <mat-form-field style=\"width: 100%\">\r\n              <input matInput placeholder=\"Email *\" type=\"email\" formControlName=\"email\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width: 100%\">\r\n              <input matInput placeholder=\"Password * (min 6 characters)\" type=\"password\" formControlName=\"password\">\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid || form.pristine\" style=\"width: 100%\" >Sign Up</button>\r\n          </form>\r\n          <br>\r\n          <span style=\"position: relative; left: 40%; \"><a  routerLink=\"/signin\">SIGN IN</a></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"height: 30px;\"></div>"

/***/ }),

/***/ "./src/app/entry/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/entry/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router, auth, api) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.api = api;
        this.showError = false;
        if (localStorage.getItem('tuid'))
            this.router.navigate(['']);
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.checkLoginStatus().subscribe(function (user) {
            if (user)
                _this.router.navigate(['']);
        });
        this.form = this.fb.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])]
        });
    };
    SignupComponent.prototype.signin = function () {
        this.router.navigate(['/signin']);
    };
    SignupComponent.prototype.submit = function (form) {
        var _this = this;
        this.auth.signup(form.value.email, form.value.password)
            .then(function (res) {
            _this.api.createUser(res.user.uid, {
                firstName: form.value.fname,
                lastName: form.value.lname,
                country: form.value.country,
                email: form.value.email,
                password: form.value.password
            })
                .then(function (ress) {
                localStorage.setItem('tuid', res.user.uid);
                _this.router.navigate(['']);
            }, function (err) {
                _this.showError = true;
                _this.errMsg = err.message;
                setTimeout(function () {
                    _this.showError = false;
                }, 5000);
            });
        }, function (err) {
            _this.showError = true;
            _this.errMsg = err.message;
            setTimeout(function () {
                _this.showError = false;
            }, 5000);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/entry/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/entry/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(afs) {
        this.afs = afs;
    }
    // Pricing
    ApiService.prototype.getPrice = function (dest) {
        return this.afs.collection('pricing', function (ref) { return ref.where('to', '==', dest); }).snapshotChanges();
    };
    ApiService.prototype.getPricingById = function (id) {
        return this.afs.doc('pricing/' + id).valueChanges();
    };
    ApiService.prototype.getRates = function (id) {
        return this.afs.collection('rates', function (ref) { return ref.where('id', '==', id); }).valueChanges();
    };
    // Create Username
    ApiService.prototype.createUser = function (uid, data) {
        return this.afs.doc('users/' + uid).set(data);
    };
    //get User
    ApiService.prototype.getUser = function (uid) {
        return this.afs.doc('users/' + uid).valueChanges();
    };
    //get User data with meta
    ApiService.prototype.getUserProfile = function (uid) {
        return this.afs.doc('users/' + uid).snapshotChanges();
    };
    //Update User
    ApiService.prototype.updateUser = function (uid, data) {
        return this.afs.doc('users/' + uid).set(data);
    };
    //retrieve country data
    ApiService.prototype.getCountryName = function (dest) {
        return this.afs.collection('pricing', function (ref) { return ref.where('to', '==', dest); }).snapshotChanges();
    };
    //get price
    ApiService.prototype.getCountryPrices = function (id, weight) {
        return this.afs.collection('rates', function (ref) { return ref.where('id', '==', id).where('maxweight', '>=', weight); }).snapshotChanges();
    };
    ApiService.prototype.setBill = function (order) {
        return this.afs.collection('orders').add(order);
    };
    ApiService.prototype.processPayment = function (id, amount, token) {
        var payment = { id: id, token: token, amount: amount };
        return this.afs.collection('payments').add(payment);
    };
    ApiService.prototype.processPayment1 = function (id, amount) {
        var payment = { id: id, amount: amount };
        return this.afs.collection('payments').add(payment);
    };
    //return orders by id
    ApiService.prototype.getOrder = function (uid) {
        return this.afs.collection('orders', function (ref) { return ref.where('userId', '==', uid); }).snapshotChanges();
    };
    ApiService.prototype.getBoxes = function () {
        return this.afs.collection('box').valueChanges();
    };
    ApiService.prototype.getNewOrders = function () {
        return this.afs.collection('neworders').valueChanges();
    };
    ApiService.prototype.createOrder = function (data) {
        return this.afs.collection('neworders').add(data);
    };
    ApiService.prototype.getNewOrdersById = function (id) {
        return this.afs.collection('neworders', function (ref) { return ref.where('userid', '==', id); }).valueChanges();
    };
    ApiService.prototype.getOrdersById = function (id) {
        return this.afs.collection('orders', function (ref) { return ref.where('userid', '==', id); }).valueChanges();
    };
    ApiService.prototype.getNewOrderByOrderId = function (id) {
        return this.afs.collection('neworders', function (ref) { return ref.where('orderid', '==', id); }).valueChanges();
    };
    ApiService.prototype.getOrderByOrderId = function (id) {
        return this.afs.collection('orders', function (ref) { return ref.where('orderid', '==', id); }).valueChanges();
    };
    ApiService.prototype.getTrackingInformation = function (id) {
        return this.afs.doc('tracking/' + id).valueChanges();
    };
    ApiService.prototype.contactUs = function (data) {
        return this.afs.collection('contactus').add(data);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth-gaurd.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-gaurd.service.ts ***!
  \************************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGaurdService.prototype.canActivate = function () {
        if (localStorage.getItem('tuid'))
            return true;
        else
            return false;
    };
    AuthGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(auth) {
        this.auth = auth;
    }
    AuthService.prototype.login = function (email, password) {
        return this.auth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signup = function (email, password) {
        return this.auth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.sendVerificationEmail = function () {
        return this.auth.auth.currentUser.sendEmailVerification();
    };
    AuthService.prototype.setPersistance = function () {
        return this.auth.auth.setPersistence(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].Auth.Persistence.SESSION);
    };
    AuthService.prototype.forgotPassword = function (email) {
        return this.auth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.logout = function () {
        this.auth.auth.signOut();
    };
    AuthService.prototype.checkLoginStatus = function () {
        return this.auth.authState;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelperService = /** @class */ (function () {
    function HelperService(http) {
        this.http = http;
    }
    HelperService.prototype.getCountries = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get('./assets/data/countries.json', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((this.extractData)));
    };
    HelperService.prototype.getCities = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get('./assets/data/cities.json', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((this.extractData)));
    };
    HelperService.prototype.getUAECities = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get('./assets/data/uae.json', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((this.extractData)));
    };
    HelperService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    HelperService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || error);
    };
    HelperService.prototype.getCountryPhoneCodes = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get('./assets/data/phonecode.json', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((this.extractData)));
    };
    HelperService.prototype.simpleHttp = function (amount, token) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        //callrequest
        return this.http.post('http://localhost:3000/payments', {
            amount: amount.toString(),
            token: token
        }, options);
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"w3_agile_footer_grids\">\r\n      <div class=\"col-md-4 w3_agile_footer_grid\">\r\n        <h3>Navigation</h3>\r\n        <ul class=\"agileits_w3layouts_footer_grid_list\">\r\n          <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i><a routerLink=\"\">Home</a></li>\r\n          <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i><a routerLink=\"/tracking\">Tracking</a></li>\r\n          <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i><a routerLink=\"/orders\">Orders</a></li>\r\n          <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i><a routerLink=\"/about-us\">About Us</a></li>\r\n          <li><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i><a routerLink=\"/contact-us\">contact Us</a></li>\r\n\r\n        </ul>\r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n    <div class=\"w3ls_address_mail_footer_grids\">\r\n      <div class=\"col-md-4 w3ls_footer_grid_left\">\r\n        <div class=\"wthree_footer_grid_left\">\r\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <p>Address Line <span>Dubai, United Arab Emirates.</span></p>\r\n      </div>\r\n      <div class=\"col-md-4 w3ls_footer_grid_left\">\r\n        <div class=\"wthree_footer_grid_left\">\r\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <p>+(971) 56 210 5471</p>\r\n      </div>\r\n      <div class=\"col-md-4 w3ls_footer_grid_left\">\r\n        <div class=\"wthree_footer_grid_left\">\r\n          <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <p><a >ks.tradingdxb@gmail.com</a> </p>\r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n    <div class=\"agileinfo_copyright\">\r\n      <p>© 2018 KS Logistics. All Rights Reserved | Powered by <a href=\"https://www.atrixdigital.com/\">Atrix Digital</a></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- //footer -->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_section_agile\">\r\n  <div class=\"agileits_w3layouts_banner_nav\">\r\n     \r\n    <nav class=\"navbar navbar-default\">\r\n      <div class=\"navbar-header navbar-left\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n      <h1><a class=\"navbar-brand\" routerLink=\"\">\r\n        <img src=\"./../../../assets/images/logo.png\" alt=\"KSL Logistics\" style=\"height: 80px; width: 100px; position: relative; top: -25px;\">\r\n      </a></h1>\r\n\r\n      </div>\r\n       <!-- <ul class=\"agile_forms\">\r\n        <li  *ngIf=\"!uid\"  ><a class=\"active\" routerLink=\"/signin\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Sign In</a> </li>\r\n        <li *ngIf=\"uid\"><a class=\"active\" (click)=\"signout()\"  ><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Sign Out</a> </li>\r\n        <li *ngIf=\"!uid\"><a routerLink=\"/signup\" ><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Sign Up</a> </li>\r\n      </ul> -->\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\r\n        <nav class=\"link-effect-2\" id=\"link-effect-2\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"routerlinkactive\"><a routerLink=\"\" class=\"effect-3\">Home</a></li>\r\n            <li><a routerLink=\"/tracking\" class=\"effect-3\">Tracking</a></li>\r\n            <li *ngIf=\"uid\"><a routerLink=\"/orders\" class=\"effect-3\">Orders</a></li>\r\n            <li><a routerLink=\"/about-us\" class=\"effect-3\">AboutUs</a></li>\r\n\r\n            \r\n            <li><a routerLink ='/contact-us' class=\"effect-3\">ContactUs</a></li>\r\n            <li  *ngIf=\"!uid\"  ><a class=\"active\" routerLink=\"/signin\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Sign In</a> </li>\r\n            <li *ngIf=\"uid\"><a class=\"small\">{{user?.email}}</a></li>\r\n            <li *ngIf=\"uid\"><a class=\"active\" (click)=\"signout()\"  style=\"cursor: pointer;\" ><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Sign Out</a> </li>\r\n            <li *ngIf=\"!uid\"><a routerLink=\"/signup\" ><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Sign Up</a> </li>\r\n          </ul>\r\n        </nav>\r\n\r\n      </div>\r\n    </nav>\t\r\n<div class=\"clearfix\"> </div> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.loggedIn();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.loggedIn = function () {
        var _this = this;
        this.auth.checkLoginStatus().subscribe(function (user) {
            if (user) {
                _this.uid = true;
                _this.user = user;
                localStorage.setItem('tuid', user.uid);
            }
            else {
                _this.uid = false;
                localStorage.removeItem('tuid');
            }
        });
    };
    NavbarComponent.prototype.signout = function () {
        localStorage.removeItem('tuid');
        localStorage.removeItem('booking');
        this.auth.logout();
        this.router.navigate(['']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ui/spinner/spinner.component.css":
/*!**************************************************!*\
  !*** ./src/app/ui/spinner/spinner.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-roller {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n  .lds-roller div {\r\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    -webkit-transform-origin: 32px 32px;\r\n            transform-origin: 32px 32px;\r\n  }\r\n  .lds-roller div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: rgb(0, 0, 0);\r\n    margin: -3px 0 0 -3px;\r\n  }\r\n  .lds-roller div:nth-child(1) {\r\n    -webkit-animation-delay: -0.036s;\r\n            animation-delay: -0.036s;\r\n  }\r\n  .lds-roller div:nth-child(1):after {\r\n    top: 50px;\r\n    left: 50px;\r\n  }\r\n  .lds-roller div:nth-child(2) {\r\n    -webkit-animation-delay: -0.072s;\r\n            animation-delay: -0.072s;\r\n  }\r\n  .lds-roller div:nth-child(2):after {\r\n    top: 54px;\r\n    left: 45px;\r\n  }\r\n  .lds-roller div:nth-child(3) {\r\n    -webkit-animation-delay: -0.108s;\r\n            animation-delay: -0.108s;\r\n  }\r\n  .lds-roller div:nth-child(3):after {\r\n    top: 57px;\r\n    left: 39px;\r\n  }\r\n  .lds-roller div:nth-child(4) {\r\n    -webkit-animation-delay: -0.144s;\r\n            animation-delay: -0.144s;\r\n  }\r\n  .lds-roller div:nth-child(4):after {\r\n    top: 58px;\r\n    left: 32px;\r\n  }\r\n  .lds-roller div:nth-child(5) {\r\n    -webkit-animation-delay: -0.18s;\r\n            animation-delay: -0.18s;\r\n  }\r\n  .lds-roller div:nth-child(5):after {\r\n    top: 57px;\r\n    left: 25px;\r\n  }\r\n  .lds-roller div:nth-child(6) {\r\n    -webkit-animation-delay: -0.216s;\r\n            animation-delay: -0.216s;\r\n  }\r\n  .lds-roller div:nth-child(6):after {\r\n    top: 54px;\r\n    left: 19px;\r\n  }\r\n  .lds-roller div:nth-child(7) {\r\n    -webkit-animation-delay: -0.252s;\r\n            animation-delay: -0.252s;\r\n  }\r\n  .lds-roller div:nth-child(7):after {\r\n    top: 50px;\r\n    left: 14px;\r\n  }\r\n  .lds-roller div:nth-child(8) {\r\n    -webkit-animation-delay: -0.288s;\r\n            animation-delay: -0.288s;\r\n  }\r\n  .lds-roller div:nth-child(8):after {\r\n    top: 45px;\r\n    left: 10px;\r\n  }\r\n  @-webkit-keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/ui/spinner/spinner.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/spinner/spinner.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>"

/***/ }),

/***/ "./src/app/ui/spinner/spinner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/spinner/spinner.component.ts ***!
  \*************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/ui/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/ui/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCQo9We8GMS3GSZ3DaCcy-odAnvs5nVFLk",
        authDomain: "trackinglive-89835.firebaseapp.com",
        databaseURL: "https://trackinglive-89835.firebaseio.com",
        projectId: "trackinglive-89835",
        storageBucket: "trackinglive-89835.appspot.com",
        messagingSenderId: "1088365011407"
    },
    stripeKey: 'pk_test_i6Mjxq8jwet6IoCyw8AHgz6S'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Atrix\Projects\TrackingLive\project\Logistics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map