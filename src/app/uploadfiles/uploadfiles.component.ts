import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

  filesToUpload: FileUploadData[] = [];
  currentFormIndex: number = 0;
  filesPerStep: number = 3; // Number of forms to show in each step
  fileTypes: string[] = [
    'Pan',
    'Aadhar',
    'Image',
    'Salary Slips (1)',
    'Salary Slips (2)',
    'Salary Slips (3)',
    'Bank Statement',
    'Present Address Proof',
    'Permanent Address Proof',
    'Bank Check',
    'Nominee PAN',
    'Nominee Aadhar',
    'Nominee Image'
  ];

  constructor(private http: HttpClient) { }

  onFileSelected(event: any, fileType: string) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.filesToUpload.push({ fileType, file: files[i] });
    }
  }

  proceedNext() {
    this.currentFormIndex += this.filesPerStep;
    if (this.currentFormIndex >= this.fileTypes.length) {
      console.log("Reached the last form.");
      this.currentFormIndex = this.fileTypes.length - 1;
    }
  }

  submitAllFiles() {
    const filesToUpload = this.filesToUpload.slice(this.currentFormIndex - this.filesPerStep, this.currentFormIndex);

    filesToUpload.forEach((fileData) => {
      const formData = new FormData();
      formData.append('image', fileData.file);

      this.http.post<any>('http://your-java-api-url/upload', formData).subscribe(
        response => {
          console.log('File uploaded successfully!', response);
        },
        error => {
          console.error('Error uploading file:', error);
          // Handle error
        }
      );
    });
  }

  getVisibleFormIndexes(): number[] {
    const startIndex = this.currentFormIndex;
    const endIndex = Math.min(startIndex + this.filesPerStep, this.fileTypes.length);
    return Array.from({ length: endIndex - startIndex }, (_, index) => startIndex + index);
  }
}
