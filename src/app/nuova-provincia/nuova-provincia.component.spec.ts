import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaProvinciaComponent } from './nuova-provincia.component';

describe('NuovaProvinciaComponent', () => {
  let component: NuovaProvinciaComponent;
  let fixture: ComponentFixture<NuovaProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaProvinciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
