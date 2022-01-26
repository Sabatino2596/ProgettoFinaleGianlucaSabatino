import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificafatturaComponent } from './modificafattura.component';

describe('ModificafatturaComponent', () => {
  let component: ModificafatturaComponent;
  let fixture: ComponentFixture<ModificafatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificafatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificafatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
