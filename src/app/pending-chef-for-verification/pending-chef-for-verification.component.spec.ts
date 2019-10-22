import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChefForVerificationComponent } from './pending-chef-for-verification.component';

describe('PendingChefForVerificationComponent', () => {
  let component: PendingChefForVerificationComponent;
  let fixture: ComponentFixture<PendingChefForVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingChefForVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingChefForVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
