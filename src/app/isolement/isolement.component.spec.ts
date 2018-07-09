import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolementComponent } from './isolement.component';

describe('IsolementComponent', () => {
  let component: IsolementComponent;
  let fixture: ComponentFixture<IsolementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsolementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
