import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoComuneComponent } from './nuovo-comune.component';

describe('NuovoComuneComponent', () => {
  let component: NuovoComuneComponent;
  let fixture: ComponentFixture<NuovoComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoComuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
