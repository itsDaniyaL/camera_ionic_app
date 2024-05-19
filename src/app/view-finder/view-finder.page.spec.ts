import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFinderPage } from './view-finder.page';

describe('ViewFinderPage', () => {
  let component: ViewFinderPage;
  let fixture: ComponentFixture<ViewFinderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
