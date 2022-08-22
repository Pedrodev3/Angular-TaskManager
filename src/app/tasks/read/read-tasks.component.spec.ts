import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTasksComponent } from './read-tasks.component';

describe('ReadTasksComponent', () => {
  let component: ReadTasksComponent;
  let fixture: ComponentFixture<ReadTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
