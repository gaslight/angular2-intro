import {Component, Input} from 'angular2/core';
import CandidateService from "./candidate-service";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'candidate-details',
  templateUrl: "app/candidate-details.html",
  directives: [ROUTER_DIRECTIVES]
})
export default class CandidateDetailsComponent {
  constructor(routeParams: RouteParams, candidateService: CandidateService) {
    this.candidateService = candidateService;
    this.candidateService.getCandidate(routeParams.get("id")).subscribe( (candidate) => {
      this.candidate = candidate;
    });
  }
}
