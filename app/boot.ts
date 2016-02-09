import {bootstrap}    from 'angular2/platform/browser';
import AppComponent from './app';
import CandidateService from "./candidate-service";
import {HTTP_PROVIDERS} from "angular2/http"

bootstrap(AppComponent, [CandidateService, HTTP_PROVIDERS]);
