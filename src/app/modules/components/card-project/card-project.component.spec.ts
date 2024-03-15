import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectComponent } from './card-project.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

describe('CardProjectComponent', () => {
  let component: CardProjectComponent;
  let fixture: ComponentFixture<CardProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjectComponent],
      imports: [PrimeNgModule, TranslateModule.forRoot()],

    });
    fixture = TestBed.createComponent(CardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
