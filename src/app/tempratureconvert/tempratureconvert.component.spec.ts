import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempratureconvertComponent } from './tempratureconvert.component';

describe('TempratureconvertComponent', () => {
  let component: TempratureconvertComponent;
  let fixture: ComponentFixture<TempratureconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempratureconvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempratureconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
