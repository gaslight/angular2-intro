import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    templateUrl: "app/app.html"
})
export default class AppComponent {
  constructor() {
    this.candidates = [{id: 1, name: "Joe"}, {id: 2, name: "Jane"}];
  }

  selectCandidate(candidate) {
    this.selectedCandidate = candidate;
  }
}
