import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdPreviewComponent } from './bird-preview.component';

describe('BirdPreviewComponent', () => {
  let component: BirdPreviewComponent;
  let fixture: ComponentFixture<BirdPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
