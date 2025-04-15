import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbboardComponent } from './dashbboard.component';

describe('DashbboardComponent', () => {
  let component: DashbboardComponent;
  let fixture: ComponentFixture<DashbboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
