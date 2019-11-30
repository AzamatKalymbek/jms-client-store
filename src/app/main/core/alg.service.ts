import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AlgService {
    baseUrl = '/c2p/core/algorithm';

    constructor(protected http: HttpClient) {
    }

    getKmean(clusterCount, iterCount, viaNearestNeighbor, sourceFileName): Observable<any> {
        return this.http.get(this.baseUrl + `/kmean/${clusterCount}/${iterCount}/${viaNearestNeighbor}/${sourceFileName}`);
    }

    getMaxmin(clusterCount, iterCount, viaNearestNeighbor, viaMatrixDistance, sourceFileName): Observable<any> {
        return this.http.get(this.baseUrl + `/max-min/${clusterCount}/${iterCount}/${viaNearestNeighbor}/${viaMatrixDistance}/${sourceFileName}`);
    }

    getAvo(clusterCount, iterCount, gammaParam, sourceFileName): Observable<any> {
        return this.http.get(this.baseUrl + `/avo/${clusterCount}/${iterCount}/${gammaParam}/${sourceFileName}`);
    }

    getReduce(initialValue, reduceValue, sourceFileName): Observable<any> {
        return this.http.get(this.baseUrl + `/reduce/${initialValue}/${reduceValue}/${sourceFileName}`);
    }
}
