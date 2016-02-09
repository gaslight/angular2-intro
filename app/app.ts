import {Component} from 'angular2/core';
import CandidateDetails from "./candidate-details";
import CandidateService from "./candidate-service";

@Component({
    selector: 'my-app',
    templateUrl: "app/app.html",
    directives: [CandidateDetails]
})
export default class AppComponent {
  constructor(candidateService: CandidateService) {
    this.candidates = candidateService.candidates;
  }

  selectCandidate(candidate) {
    this.selectedCandidate = candidate;
  }
}
