import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AlgSyntethisService {
    baseUrl = '/c2p/core/algorithm-syntethis';

    constructor(protected http: HttpClient) {
    }

    getAlgSynthesis(sourseFileName, delta): Observable<any> {
        return this.http.get(this.baseUrl + `/${sourseFileName}/${delta}`);
    }
}
