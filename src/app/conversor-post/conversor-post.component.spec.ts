import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorPostComponent } from './conversor-post.component';

describe('ConversorPostComponent', () => {
  let component: ConversorPostComponent;
  let fixture: ComponentFixture<ConversorPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversorPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
