import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTopicsComponent } from './recent-topics.component';

describe('RecentTopicsComponent', () => {
  let component: RecentTopicsComponent;
  let fixture: ComponentFixture<RecentTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
