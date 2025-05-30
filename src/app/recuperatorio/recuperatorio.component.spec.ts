import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperatorioComponent } from './recuperatorio.component';

describe('RecuperatorioComponent', () => {
  let component: RecuperatorioComponent;
  let fixture: ComponentFixture<RecuperatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
