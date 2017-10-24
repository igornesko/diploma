import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OfficeService {
  public subject = new BehaviorSubject([]);

  constructor(private http: Http) {
    console.log('OfficeService');
    this.fetchOffices();
  }

  fetchOffices() {
    this.http
      .get('https://itk-exam-api.herokuapp.com/api/offices').toPromise()
      .then(
        (response: Response) => {
          this.subject.next(response.json());
          console.log(this.subject);
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getOffices() {
    return this.subject.asObservable();
  }
}
