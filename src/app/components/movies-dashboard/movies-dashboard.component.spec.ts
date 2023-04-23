import { TestBed } from '@angular/core/testing';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { MoviesDashboardModule } from './movies-dashboard.module';
import { expect } from '@jest/globals';
import { Router } from '@angular/router';

describe('Movies Dashboard Component', () => {
  let component: MoviesDashboardComponent;
  let router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesDashboardComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(MoviesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribe to router events', () => {
    // Define a mock handler for testing purposes
    // const handler = jest.fn();
    // const route = new EventRouter();
    // // Subscribe to a mock event using the mock handler
    // // router.events.subscribe(component.btnIsSelected, 'btnIsSelected', handler);
    // const url = '/search';
    // route.handleEvent({ url });
    // component.selectSearchBtn();
    // console.log(router.events);
    // expect(component.btnIsSelected).toBeTruthy();
  });
});
