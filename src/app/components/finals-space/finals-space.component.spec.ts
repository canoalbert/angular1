import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalsSpaceComponent } from './finals-space.component';

describe('FinalsSpaceComponent', () => {
  let component: FinalsSpaceComponent;
  let fixture: ComponentFixture<FinalsSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalsSpaceComponent]
    });
    fixture = TestBed.createComponent(FinalsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
