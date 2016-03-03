/*
 * Angular
 */

import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy,
  RouteConfig,
} from 'angular2/router';

/*
 * Components
 */
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {LoginComponent} from './components/LoginComponent';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'template/navbar.html'
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home'] },
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/contact', name: 'Contact', component: ContactComponent },
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
])
class RoutesDemoApp {
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);