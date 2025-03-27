import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTiktokTemplateComponent } from './card-tiktok-template.component';

describe('CardTiktokTemplateComponent', () => {
  let component: CardTiktokTemplateComponent;
  let fixture: ComponentFixture<CardTiktokTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTiktokTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTiktokTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
