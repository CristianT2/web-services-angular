import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorImagenComponent } from './generador-imagen.component';

describe('GeneradorImagenComponent', () => {
  let component: GeneradorImagenComponent;
  let fixture: ComponentFixture<GeneradorImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneradorImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
