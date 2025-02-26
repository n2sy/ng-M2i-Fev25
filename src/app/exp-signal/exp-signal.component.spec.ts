import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSignalComponent } from './exp-signal.component';

describe('ExpSignalComponent', () => {
  let component: ExpSignalComponent;
  let fixture: ComponentFixture<ExpSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
