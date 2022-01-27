import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovafatturaComponent } from './nuovafattura.component';

describe('NuovafatturaComponent', () => {
  let component: NuovafatturaComponent;
  let fixture: ComponentFixture<NuovafatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovafatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovafatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
