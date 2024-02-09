import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestplaceComponent } from './bestplace.component';

describe('BestplaceComponent', () => {
  let component: BestplaceComponent;
  let fixture: ComponentFixture<BestplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
