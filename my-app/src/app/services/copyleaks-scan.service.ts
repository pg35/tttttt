import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  CompleteResult,
  ScanResult,
  ScanSource
} from "@copyleaks/plagiarism-report";

import { delay } from "rxjs/operators";
import { lastValueFrom } from "rxjs";

const REQUEST_DELAY = 3000; // 3 sec

@Injectable({
  providedIn: "root"
})
export class ScanService {
  constructor(private _httpClient: HttpClient) {}

  public async getCrawledVersionAsync(scanId: string) {
    return await lastValueFrom(
      this._httpClient.get<ScanSource>(
        `https://mocki.io/v1/c0c1e123-ea69-460d-897d-8131406c68fb`
      )
      //.pipe(delay(REQUEST_DELAY))
      //.toPromise();
    );
  }

  public async getCompleteResultAsync(scanId: string) {
    return await lastValueFrom(
      this._httpClient.get<CompleteResult>(
        `https://mocki.io/v1/d6d99822-cb15-4b70-80e8-c925e10c8934`
      )
      //.pipe(delay(REQUEST_DELAY))
      //.toPromise();
    );
  }

  public async getResultByIdAsync(scanId: string, resultId: string) {
    return await lastValueFrom(
      this._httpClient.get<ScanResult>(
        `https://mocki.io/v1/28e919a5-eeaa-44dd-bb87-eaa4ff047d08`
      )
      //.pipe(delay(REQUEST_DELAY))
      // .toPromise();
    );
  }
}
