import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInboxComponent } from './task-inbox.component';

describe('TaskInboxComponent', () => {
  let component: TaskInboxComponent;
  let fixture: ComponentFixture<TaskInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
