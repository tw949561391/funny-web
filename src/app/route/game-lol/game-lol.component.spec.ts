import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLolComponent } from './game-lol.component';

describe('GameLolComponent', () => {
  let component: GameLolComponent;
  let fixture: ComponentFixture<GameLolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
