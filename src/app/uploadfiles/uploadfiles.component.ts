import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService, CustomFormData } from '../restapi.service';
import { environment } from 'src/environments/environment';

interface FileUploadData {
  fileType: string;
  file: File;
}

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {

  id:any='';
  todo:any

  constructor(private http: HttpClient,private router:Router,private route:ActivatedRoute,private service:RestapiService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todo = new CustomFormData(this.id,'Please enter Firstname',
                            'Please enter Lastname','Please enter Email',
                            'Please enter Aadharnumber','Please enter DateofBirth',
                            'Please enter PAN Number','Please enter Parent Name',
                            'Please enter Parent Phone','Please enter Parent Email',
                            'Please enter Present AddressLine 1','Please enter Present AddressLine 2',
                            'Please enter Present State','Please enter Present Country',
                            'Please enter Present Pincode','Please enter Permanent AddressLine 1',
                            'Please enter Permanent AddressLine 2','Please enter Permanent State',
                            'Please enter Present Country', 'Please enter Present Pincode',
                            'Please enter Company Name','Please enter Company Address Line 1',
                            'Please enter Company Address Line 2','Please enter Company State',
                            'Please enter Company Country','Company Pincode',
                            'Please enter Company Email','Please enter Monthly Income',
                            'Please enter Required Amount','Please enter Tenure',
                            'Please enter Active Loans','Please enter your current EMI Amount',
                            'Please enter Reference1 Name','Please enter Reference1 Phone',
                            'Please enter Reference2 Name','Please enter Reference2 Phone',
                            'Please enter Nominee Name','Please enter Nominee Age',
                            'Please enter Nominee Phone', 'Please enter Nominee Email',
                            'Please enter Status','Please enter date','Please enter whoapplied');
    if(this.id!=-1){
      this.retriveTodo();
    }
  }

  retriveTodo(){
    this.service.getTodo(this.id).subscribe(
      data => {
        this.todo = data;
        this.todo.status = 'Progress'; // Set status after receiving data
      }   
   )
  }
  filesToUpload: { [key: string]: FileUploadData } = {}; // Dictionary to store selected file for each form type
  currentFormIndex: number = 0;
  filesPerStep: number = 3; // Number of forms to show in each step
  fileTypes: string[] = [
    'PAN Card',
    'Aadhar Card Front Pic',
    'Aadhar Card Back Pic',
    'Selfie',
    'Salary Slips (1)',
    'Salary Slips (2)',
    'Salary Slips (3)',
    'Bank Statement',
    'Present Address Proof',
    'Permanent Address Proof',
    'Cancelled Cheque',
    'Guarantor PAN',
    'Guarantor Aadhar',
    'Guarantor Selfie',
    'GST Min 1 year',
    'Labour Licence Min 1 year',
    'MSME Min 1 year',
    'Food Licence Min 1 year',
    'ITR Min 1 year',
    'House Tax Proof',
    'Electricity Bill',
    'House Property Documents'
  ];

  isFormOptional(fileType: string): boolean {
    const optionalForms = [
      'PAN Card',
      'Aadhar Card Front Pic',
      'Aadhar Card Back Pic',
      'Selfie',
      'Salary Slips (1)',
      'Salary Slips (2)',
      'Salary Slips (3)',
      'Bank Statement',
      'Present Address Proof',
      'Permanent Address Proof',
      'Cancelled Cheque',
      'Guarantor PAN',
      'Guarantor Aadhar',
      'Guarantor Selfie',
      'GST Min 1 year',
      'Labour Licence Min 1 year',
      'MSME Min 1 year',
      'Food Licence Min 1 year',
      'ITR Min 1 year',
      'House Tax Proof',
      'Electricity Bill',
      'House Property Documents'
    ];
    return optionalForms.includes(fileType);
  }

  onFileSelected(event: any, fileType: string) {
    const file = event.target.files[0];
    this.filesToUpload[fileType] = { fileType, file }; // Store the selected file for the corresponding form type
  }

  proceedNext() {
    // Check if all forms in the current step have been uploaded
    // const startIndex = this.currentFormIndex;
    // const endIndex = Math.min(startIndex + this.filesPerStep, this.fileTypes.length);
    // for (let i = startIndex; i < endIndex; i++) {
    //   const fileType = this.fileTypes[i];
    //   if (!this.isFormOptional(fileType) && !this.filesToUpload[fileType]) {
    //     alert('Please upload files for all forms.');
    //     return; // Don't proceed if any form is not uploaded
    //   }
    // }
 


    this.currentFormIndex += this.filesPerStep;
    if (this.currentFormIndex >= this.fileTypes.length) {
      console.log("Reached the last form.");
      this.currentFormIndex = this.fileTypes.length - 1;
    }
  }

  // submitAllFiles() {
  //   // Validate if all forms in the last step have been uploaded
  //   const startIndex = this.currentFormIndex - this.filesPerStep;
  //   const endIndex = this.currentFormIndex;
  //   for (let i = startIndex; i < endIndex; i++) {
  //     const fileType = this.fileTypes[i];
  //     if (!this.filesToUpload[fileType]) {
  //       alert('Please upload files for all forms.');
  //       return; // Don't submit if any form in the last step is not uploaded
  //     }
  //   }

  //   // Proceed to submit files
  //   for (const fileType of this.fileTypes) {
  //     const fileData = this.filesToUpload[fileType];
  //     if (fileData) {
  //       const formData = new FormData();
  //       formData.append('image', fileData.file);

  //       //this.http.post<any>(`http://localhost:8081/image/${this.id}`, formData).subscribe(
  //       this.http.post<any>(environment.A2B_DIGITAL_LOGIN_URL + `image/${this.id}`, formData).subscribe(
  //         response => {
  //           console.log(`File (${fileType}) uploaded successfully!`, response);
  //         },
  //         error => {
  //           console.error(`Error uploading file (${fileType}):`, error);
  //           // Handle error
  //         }
  //       );
  //     }
  //   }
  //   this.service.modifyTodoAfterUploadDocuments(this.id,this.todo).subscribe(
  //     data =>{
  //       this.router.navigate(['home']);
  //     }
  //   )
  //   alert('Thank You!.. All files are uploded successfully');
  //   //this.router.navigate(['/home'])
  //   // Reset filesToUpload and currentFormIndex after submission
  //   this.filesToUpload = {};
  //   this.currentFormIndex = 0;
  // }

  submitAllFiles() {
    // Proceed to submit files
    for (const fileType of this.fileTypes) {
        const fileData = this.filesToUpload[fileType];
        if (fileData) {
            const formData = new FormData();
            formData.append('image', fileData.file);

            //this.http.post<any>(`http://localhost:8081/image/${this.id}`, formData).subscribe(
            this.http.post<any>(environment.A2B_DIGITAL_LOGIN_URL + `image/${this.id}`, formData).subscribe(
                response => {
                    console.log(`File (${fileType}) uploaded successfully!`, response);
                },
                error => {
                    console.error(`Error uploading file (${fileType}):`, error);
                    // Handle error
                }
            );
        }
    }
    this.service.modifyTodoAfterUploadDocuments(this.id, this.todo).subscribe(
        data => {
            this.router.navigate(['status']);
        }
    )
    alert('Thank You!.. All files are uploded successfully');
    // Reset filesToUpload and currentFormIndex after submission
    this.filesToUpload = {};
    this.currentFormIndex = 0;
}


  getVisibleForms(): string[] {
    const visibleForms: string[] = [];
    const startIndex = this.currentFormIndex;
    const endIndex = Math.min(startIndex + this.filesPerStep, this.fileTypes.length);
    for (let i = startIndex; i < endIndex; i++) {
      visibleForms.push(this.fileTypes[i]);
    }
    return visibleForms;
  }
}
