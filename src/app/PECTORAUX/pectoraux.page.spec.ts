import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,} from '@angular/core';

import { PectorauxPage } from './pectoraux.page';

describe('PectorauxPage', () => {
  let component: PectorauxPage;
  let fixture: ComponentFixture<PectorauxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PectorauxPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PectorauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
