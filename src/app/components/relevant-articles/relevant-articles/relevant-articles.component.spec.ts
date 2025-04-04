import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantArticlesComponent } from './relevant-articles.component';

describe('RelevantArticlesComponent', () => {
  let component: RelevantArticlesComponent;
  let fixture: ComponentFixture<RelevantArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelevantArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevantArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
