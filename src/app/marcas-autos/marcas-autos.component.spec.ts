import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasAutosComponent } from './marcas-autos.component';

describe('MarcasAutosComponent', () => {
  let component: MarcasAutosComponent;
  let fixture: ComponentFixture<MarcasAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasAutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcasAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
