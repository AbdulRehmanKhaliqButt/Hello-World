import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeroutingComponent } from './homerouting.component';

describe('HomeroutingComponent', () => {
  let component: HomeroutingComponent;
  let fixture: ComponentFixture<HomeroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
