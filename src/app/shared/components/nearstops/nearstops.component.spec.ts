import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearstopsComponent } from './nearstops.component';

describe('NearstopsComponent', () => {
  let component: NearstopsComponent;
  let fixture: ComponentFixture<NearstopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearstopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearstopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
