// loader.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new Subject<boolean>();
  public isLoading$ = this.loadingSubject.asObservable();

  showLoader(duration = 500) {
    this.loadingSubject.next(true);
    setTimeout(() => this.hideLoader(), duration);
  }

  hideLoader() {
    this.loadingSubject.next(false);
  }
}
