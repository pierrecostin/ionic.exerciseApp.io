import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,} from '@angular/core';
import { BICEPSPage } from './biceps.page';

describe('BICEPSPage', () => {
  let component: BICEPSPage;
  let fixture: ComponentFixture<BICEPSPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BICEPSPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BICEPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
