import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
	this.route('myhome');
	this.route('myText');
	this.route('texteros');
	this.route('about');
	this.route('contact',{path: '/get-in-touch'});
});
