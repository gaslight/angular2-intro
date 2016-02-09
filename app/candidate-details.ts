import {Component, Input} from 'angular2/core';
@Component({
  selector: 'candidate-details',
  templateUrl: "app/candidate-details.html"
})
export default class CandidateDetailsComponent {
  @Input() public candidate;
}
