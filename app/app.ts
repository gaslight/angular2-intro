import {Component} from 'angular2/core';
import CandidateDetails from "./candidate-details";
import CandidateService from "./candidate-service";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";


@Component({
    selector: 'my-app',
    templateUrl: "app/app.html",
    directives: [CandidateDetails, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: "/candidate/:id", name: "CandidateDetails", component: CandidateDetails}
])
export default class AppComponent {
  constructor(candidateService: CandidateService) {
    this.candidateService = candidateService;
    this.candidateService.getCandidates().subscribe( (candidates) => {
      this.candidates = candidates;
    });
  }

  selectCandidate(candidate) {
    this.selectedCandidate = candidate;
  }
}
