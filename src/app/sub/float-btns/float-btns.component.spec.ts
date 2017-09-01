import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatBtnsComponent } from './float-btns.component';

describe('FloatBtnsComponent', () => {
  let component: FloatBtnsComponent;
  let fixture: ComponentFixture<FloatBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
