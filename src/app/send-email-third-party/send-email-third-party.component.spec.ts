import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailThirdPartyComponent } from './send-email-third-party.component';

describe('SendEmailThirdPartyComponent', () => {
  let component: SendEmailThirdPartyComponent;
  let fixture: ComponentFixture<SendEmailThirdPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEmailThirdPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
