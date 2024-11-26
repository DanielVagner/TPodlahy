import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  scrollOffset = -70;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    const preloaderElement = document.getElementById('preloader');
    if (preloaderElement) {
      this.renderer.removeClass(preloaderElement, 'd-none');
    }
    setTimeout(() => {
      this.renderer.addClass(preloaderElement, 'd-none');
    }, 1000);
  }

  curentsection: any = 'home';

  onSectionChange(event: any) {
    this.curentsection = event;
  }

  windoscroll() {
    const navbar = document.getElementById('navbar');
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar?.classList.add('nav-sticky');
      document.getElementById('back-to-top')!.style.display = 'block';
    } else {
      navbar?.classList.remove('nav-sticky');
      document.getElementById('back-to-top')!.style.display = 'none';
    }
  }

  navigateToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document
            .querySelector(sectionId)
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  }

  //togglemenu
  toggleMenu() {
    document.getElementById('navbarSupportedContent')!.classList.toggle('show');
    this.isMenuOpen = !this.isMenuOpen;
  }
}
