import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwComponent } from './mhw.component';

describe('MhwComponent', () => {
  let component: MhwComponent;
  let fixture: ComponentFixture<MhwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MhwComponent]
    });
    fixture = TestBed.createComponent(MhwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
