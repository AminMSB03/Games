import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNamePopUpComponent } from './set-name-pop-up.component';

describe('SetNamePopUpComponent', () => {
  let component: SetNamePopUpComponent;
  let fixture: ComponentFixture<SetNamePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetNamePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetNamePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
