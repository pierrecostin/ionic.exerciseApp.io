import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,} from '@angular/core';
import { ABDOMINAUXPage } from './abdominaux.page';

describe('ABDOMINAUXPage', () => {
  let component: ABDOMINAUXPage;
  let fixture: ComponentFixture<ABDOMINAUXPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ABDOMINAUXPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ABDOMINAUXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
