import { Inject } from "angular2/core";
import { Http, Headers } from "angular2/http";
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

  saveCandidate(candidate) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(`http://localhost:8000/candidates/${candidate.id}`, JSON.stringify(candidate), {headers: headers}).map( (response) => response.json());
  }

}
