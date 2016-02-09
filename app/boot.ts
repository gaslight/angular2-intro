import {bootstrap}    from 'angular2/platform/browser';
import AppComponent from './app';
import CandidateService from "./candidate-service";

bootstrap(AppComponent, [CandidateService]);
