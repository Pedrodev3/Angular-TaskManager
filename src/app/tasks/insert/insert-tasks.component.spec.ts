import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTasksComponent } from './insert-tasks.component';

describe('InsertTasksComponent', () => {
  let component: InsertTasksComponent;
  let fixture: ComponentFixture<InsertTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
