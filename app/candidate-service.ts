import { Inject } from "angular2/core";
import { Http } from "angular2/http";
import "rxjs/Rx";

@Inject()
export default class CandidateService {
  constructor(http: Http) {
    this.http = http;
  }

  getCandidates() {
    return this.http.get("http://localhost:8000/candidates").map( (response) => response.json());
  }

  getCandidate(id) {
    return this.http.get(`http://localhost:8000/candidates/${id}`).map( (response) => response.json());
  }

}
