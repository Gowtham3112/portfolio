import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  private scrollEvent = new Subject<string>();

  scrollEvent$ = this.scrollEvent.asObservable();

  scrollToSection(section: string) {
    this.scrollEvent.next(section);
  }
}
