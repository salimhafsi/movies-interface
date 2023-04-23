import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss'],
})
export class MoviesDashboardComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  btnIsSelected = false;
  constructor(private router: Router) {}
  ngOnInit() {
    // Select the search button (case when refresh search page)
    if (this.router.url === '/search') {
      this.btnIsSelected = true;
    }
    /*
     * Select the search button when navigate to search page.
     * Unselect search button when leave the search page
     */
    this.selectSearchBtn();
  }
  selectSearchBtn() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe((event: any) => {
        event.url === '/search'
          ? (this.btnIsSelected = true)
          : (this.btnIsSelected = false);
      });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
