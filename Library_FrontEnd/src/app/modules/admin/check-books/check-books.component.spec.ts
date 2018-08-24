import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBooksComponent } from './check-books.component';

describe('CheckBooksComponent', () => {
  let component: CheckBooksComponent;
  let fixture: ComponentFixture<CheckBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
