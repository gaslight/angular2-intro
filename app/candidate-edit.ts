import {Component, Input} from 'angular2/core';
import CandidateService from "./candidate-service";
import {RouteParams} from "angular2/router";

@Component({
  selector: 'candidate-details',
  templateUrl: "app/candidate-edit.html"
})
export default class CandidateEditComponent {
  constructor(routeParams: RouteParams, candidateService: CandidateService) {
    this.candidateService = candidateService;
    this.candidateService.getCandidate(routeParams.get("id")).subscribe( (candidate) => {
      this.candidate = candidate;
    });
  }
}
