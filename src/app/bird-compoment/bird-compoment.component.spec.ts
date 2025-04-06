import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdCompomentComponent } from './bird-compoment.component';

describe('BirdCompomentComponent', () => {
  let component: BirdCompomentComponent;
  let fixture: ComponentFixture<BirdCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdCompomentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
