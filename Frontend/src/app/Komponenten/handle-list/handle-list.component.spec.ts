import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleListComponent } from './handle-list.component';

describe('HandleListComponent', () => {
  let component: HandleListComponent;
  let fixture: ComponentFixture<HandleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
