import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractModalPage } from './contract-modal.page';

describe('ContractModalPage', () => {
  let component: ContractModalPage;
  let fixture: ComponentFixture<ContractModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
