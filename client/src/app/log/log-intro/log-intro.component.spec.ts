import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIntroComponent } from './log-intro.component';

describe('LogIntroComponent', () => {
  let component: LogIntroComponent;
  let fixture: ComponentFixture<LogIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
