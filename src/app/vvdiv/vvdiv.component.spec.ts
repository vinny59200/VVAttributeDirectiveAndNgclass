import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvdivComponent } from './vvdiv.component';

describe('VvdivComponent', () => {
  let component: VvdivComponent;
  let fixture: ComponentFixture<VvdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
