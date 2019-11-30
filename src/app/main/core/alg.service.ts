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

    getKmean(clusterCount, iterCount, viaNearestNeighbor): Observable<any> {
        return this.http.get(this.baseUrl + `/kmean/${clusterCount}/${iterCount}/${viaNearestNeighbor}`);
    }

    getMaxmin(clusterCount, iterCount, viaNearestNeighbor, viaMatrixDistance): Observable<any> {
        return this.http.get(this.baseUrl + `/max-min/${clusterCount}/${iterCount}/${viaNearestNeighbor}/${viaMatrixDistance}`);
    }

    getAvo(clusterCount, iterCount, gammaParam, sourceFileName): Observable<any> {
        return this.http.get(this.baseUrl + `/avo/${clusterCount}/${iterCount}/${gammaParam}/${sourceFileName}`);
    }

    getReduce(initialValue, reduceValue): Observable<any> {
        return this.http.get(this.baseUrl + `/reduce/${initialValue}/${reduceValue}`);
    }
}
