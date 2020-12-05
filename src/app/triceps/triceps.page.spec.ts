import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,} from '@angular/core';
import { TRICEPSPage } from './triceps.page';

describe('TRICEPSPage', () => {
  let component: TRICEPSPage;
  let fixture: ComponentFixture<TRICEPSPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TRICEPSPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TRICEPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
