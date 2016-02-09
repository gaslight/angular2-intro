import {Component, Input} from 'angular2/core';
import CandidateService from "./candidate-service";
import {RouteParams, Router} from "angular2/router";

@Component({
  selector: 'candidate-details',
  templateUrl: "app/candidate-edit.html"
})
export default class CandidateEditComponent {
  constructor(routeParams: RouteParams, candidateService: CandidateService, router: Router) {
    this.candidateService = candidateService;
    this.router = router;
    this.candidateService.getCandidate(routeParams.get("id")).subscribe( (candidate) => {
      this.candidate = candidate;
    });
  }

  saveCandidate() {
    this.candidateService.saveCandidate(this.candidate).subscribe((savedCandidate) => {
      this.router.parent.navigate(["CandidateDetails", {id: savedCandidate.id}])
      console.log(savedCandidate);
    });
  }
}
