import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  
  constructor(private scroll: ScrollService) {}

  @Output() headerAnimationComplete = new EventEmitter<void>();

  ngOnInit() {
    setTimeout(() => {
      this.headerAnimationComplete.emit();
    }, 1500);
  }


  toggleMenu() {
    const nav = document.querySelector('nav')!;
    nav.classList.toggle('active');
  }

  scrollTo(section: string) {
    this.scroll.scrollToSection(section);
  }
}
