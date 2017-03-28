import { Injectable } from '@angular/core';
import { ApiService } from './api.service'
@Injectable()
export class GetEmployeeRatingService {

  constructor(private api:ApiService) { }

  getEmployeeRating(){
    return this.api.getfile(`${''}`);
  }
}
