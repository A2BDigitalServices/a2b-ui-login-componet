import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-createcase',
  templateUrl: './createcase.component.html',
  styleUrls: ['./createcase.component.css']
})
export class CreatecaseComponent implements OnInit {

  constructor(private router:Router,public service:RestapiService) { }

  ngOnInit(): void {
  
  }
  currentStep = 1;

  loginuser = this.service.getAuthenticatedUser();

  async submitForm(): Promise<void> {
    const formData = {
      firstname: (document.getElementById('firstname') as HTMLInputElement).value,
      lastname: (document.getElementById('lastname') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      aadharnumber: (document.getElementById('aadharnumber') as HTMLInputElement).value,
      dob: (document.getElementById('dob') as HTMLInputElement).value,
      loantype: (document.getElementById('loantype') as HTMLInputElement).value,
      pannumber: (document.getElementById('pannumber') as HTMLInputElement).value,
      fname: (document.getElementById('fname') as HTMLInputElement).value,
      mname: (document.getElementById('mname') as HTMLInputElement).value,
      sname: (document.getElementById('sname') as HTMLInputElement).value,
      relationshiptype: (document.getElementById('relationshiptype') as HTMLInputElement).value,
      presentaddressline1: (document.getElementById('presentaddressline1') as HTMLInputElement).value,
      presentaddressline2: (document.getElementById('presentaddressline2') as HTMLInputElement).value,
      presentlandmark: (document.getElementById('presentlandmark') as HTMLInputElement).value,
      presentstate: (document.getElementById('presentstate') as HTMLInputElement).value,
      presentcountry: (document.getElementById('presentcountry') as HTMLInputElement).value,
      presentpincode: (document.getElementById('presentpincode') as HTMLInputElement).value,
      presentpostaloffice: (document.getElementById('presentpostaloffice') as HTMLInputElement).value,
      permanentaddressline1: (document.getElementById('permanentaddressline1') as HTMLInputElement).value,
      permanentaddressline2: (document.getElementById('permanentaddressline2') as HTMLInputElement).value,
      permanentlandmark: (document.getElementById('permanentlandmark') as HTMLInputElement).value,
      permanentstate: (document.getElementById('permanentstate') as HTMLInputElement).value,
      permanentcountry: (document.getElementById('permanentcountry') as HTMLInputElement).value,
      permanentpincode: (document.getElementById('permanentpincode') as HTMLInputElement).value,
      permanentpostaloffice: (document.getElementById('permanentpostaloffice') as HTMLInputElement).value,
      companyname: (document.getElementById('companyname') as HTMLInputElement).value,
      companyaddressline1: (document.getElementById('companyaddressline1') as HTMLInputElement).value,
      companyaddressline2: (document.getElementById('companyaddressline2') as HTMLInputElement).value,
      companystate: (document.getElementById('companystate') as HTMLInputElement).value,
      companycountry: (document.getElementById('companycountry') as HTMLInputElement).value,
      companypincode: (document.getElementById('companypincode') as HTMLInputElement).value,
      companyemail: (document.getElementById('companyemail') as HTMLInputElement).value,
      monthlymode: (document.getElementById('monthlymode') as HTMLInputElement).value,
      monthlyincome: (document.getElementById('monthlyincome') as HTMLInputElement).value,
      requiredamount: (document.getElementById('requiredamount') as HTMLInputElement).value,
      tenure: (document.getElementById('tenure') as HTMLInputElement).value,
      activeLoans: (document.getElementById('activeLoans') as HTMLInputElement).value,
      totalEMIAmount: (document.getElementById('totalEMIAmount') as HTMLInputElement).value,
      reference1name: (document.getElementById('reference1name') as HTMLInputElement).value,
      reference1phone: (document.getElementById('reference1phone') as HTMLInputElement).value,
      referencerelationship1: (document.getElementById('referencerelationship1') as HTMLInputElement).value,
      reference2name: (document.getElementById('reference2name') as HTMLInputElement).value,
      reference2phone: (document.getElementById('reference2phone') as HTMLInputElement).value,
      referencerelationship2: (document.getElementById('referencerelationship2') as HTMLInputElement).value,
      nomineename: (document.getElementById('nomineename') as HTMLInputElement).value,
      nomineedob: (document.getElementById('nomineedob') as HTMLInputElement).value,
      nomineephone: (document.getElementById('nomineephone') as HTMLInputElement).value,
      nomineeemail: (document.getElementById('nomineeemail') as HTMLInputElement).value
    };

    try {
      //const response = await fetch('https://a2b-login-java-microservice.onrender.com/form', {
        const response = await fetch( environment.A2B_DIGITAL_LOGIN_URL +`form/${this.service.getAuthenticatedUser()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        const referenceNumber = responseData;
        alert('Your loan request submitted successfully. Here is your reference number: ' + referenceNumber);
        this.clearForm(); // Clear form fields
      } else {
        alert('Error: Unable to submit form. Please try again later.');
      }
    } catch (error) {
      alert('Error: ' + error);
    }
  }

  clearForm(): void {
    this.router.navigate(['/todos'])
  }
  
  validateCurrentStep(): boolean {
    let isValid = true;
    const currentStepElement = document.getElementById('step' + this.currentStep);
    if (currentStepElement) {
        const inputs = currentStepElement.querySelectorAll('input, select');
        inputs.forEach(input => {
            const inputElement = input as HTMLInputElement;
            if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
                isValid = false;
            }
        });
    }
    return isValid;
  }

  proceedToNextStep(nextStep: number): void {
    const isValid = this.validateCurrentStep();
    if (isValid) {
        const currentFormStep = document.getElementById('step' + this.currentStep) as HTMLElement;
        const nextFormStep = document.getElementById('step' + nextStep) as HTMLElement;

        currentFormStep.classList.remove('current-step');
        nextFormStep.classList.add('current-step');
        this.currentStep = nextStep;
    } else {
        alert('Please fill out all fields in the current step.');
    }
  }

  copyPresentAddress(): void {
    const copyAddress = (document.getElementById('copyAddress') as HTMLInputElement).checked;
    if (copyAddress) {
      // Copy present address to permanent address fields
      (document.getElementById('permanentaddressline1') as HTMLInputElement).value = (document.getElementById('presentaddressline1') as HTMLInputElement).value;
      (document.getElementById('permanentaddressline2') as HTMLInputElement).value = (document.getElementById('presentaddressline2') as HTMLInputElement).value;
      (document.getElementById('permanentlandmark') as HTMLInputElement).value = (document.getElementById('presentlandmark') as HTMLInputElement).value;
      (document.getElementById('permanentstate') as HTMLInputElement).value = (document.getElementById('presentstate') as HTMLInputElement).value;
      (document.getElementById('permanentcountry') as HTMLInputElement).value = (document.getElementById('presentcountry') as HTMLInputElement).value;
      (document.getElementById('permanentpincode') as HTMLInputElement).value = (document.getElementById('presentpincode') as HTMLInputElement).value;
      (document.getElementById('permanentpostaloffice') as HTMLInputElement).value = (document.getElementById('presentpostaloffice') as HTMLInputElement).value;
    } else {
      // Clear permanent address fields
      (document.getElementById('permanentaddressline1') as HTMLInputElement).value = '';
      (document.getElementById('permanentaddressline2') as HTMLInputElement).value = '';
      (document.getElementById('permanentlandmark') as HTMLInputElement).value = '';
      (document.getElementById('permanentstate') as HTMLInputElement).value = '';
      (document.getElementById('permanentcountry') as HTMLInputElement).value = '';
      (document.getElementById('permanentpincode') as HTMLInputElement).value = '';
      (document.getElementById('permanentpostaloffice') as HTMLInputElement).value = '';
    }
  }

  showEMIAmount(): void {
    const activeLoans = (document.getElementById('activeLoans') as HTMLSelectElement).value;
    const emiAmountSection = document.getElementById('emiAmountSection') as HTMLElement;

    if (activeLoans === 'yes') {
      emiAmountSection.style.display = 'block';
      // You can fetch or calculate the total EMI amount here
    } else {
      emiAmountSection.style.display = 'none';
      (document.getElementById('totalEMIAmount') as HTMLInputElement).value = ''; // Clear the total EMI amount field
    }
  }
}

