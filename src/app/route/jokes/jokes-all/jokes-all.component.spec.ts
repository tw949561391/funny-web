import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesAllComponent } from './jokes-all.component';

describe('JokesAllComponent', () => {
  let component: JokesAllComponent;
  let fixture: ComponentFixture<JokesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
