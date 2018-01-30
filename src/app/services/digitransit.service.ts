import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {
  apiurl: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
  pysakki = 'Kyyhkysmäki';
  constructor(private http: HttpClient) {
  }

  getRoutes() {
    interface ReittiData {
      data: object;
    }

    const body = `{
                        stops(name: "${this.pysakki}") {
                            name
                            lat
                            lon
                            patterns {
                                id
                                name
                                route {
                                    gtfsId
                                    shortName
                                    longName
                                }
                                directionId
                            }
                        }
                      }`;
    const headers = {headers: new HttpHeaders().set('Content-Type', 'application/graphql')};
    return this.http.post<ReittiData>(this.apiurl, body, headers);
  }

}