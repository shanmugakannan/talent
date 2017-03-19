import {Injectable, Inject} from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { APP_CONFIG, IAppConfig } from '../app.config';

@Injectable()
export class ApiService {
  constructor(private http:Http,@Inject(APP_CONFIG) private config: IAppConfig)
  {
   this.api_url = config.apiEndpoint;
  }

  //Properties
  headers:Headers = new Headers({Accept:'application/json',
                                "Content-Type":'application/json'
                                });
  api_url:string;

  //Functions

  getfile(path:string){
    return this.http.get(`${this.api_url}${path}`,{headers:this.headers});
  }


  get(path:string):Observable<any>{
    return this.http.get(`${this.api_url}${path}`,{headers:this.headers});
  }

  post(path: string, body:any): Observable<any> {
    this.http.get(`${this.api_url}${path}`);
    return this.http.post(`${this.api_url}${path}`, body, { headers: this.headers })
  }
}
