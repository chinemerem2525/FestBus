import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Form } from 'src/app/model/form';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  formData!: Form;
  reportForm: FormGroup;

  showError: boolean = false;


  constructor(private fb: FormBuilder, private loaderService: LoaderService, private ns: NotificationService, ) {
    this.reportForm = this.fb.group({
      subject: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      phoneNumber: ['', [Validators.required, this.nigerianPhoneNumberValidator]]

    });
  }

   // Custom validator for Nigerian phone number
   nigerianPhoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const phoneNumberPattern = /^(\+234|0)[789][01]\d{8}$/;
    const valid = phoneNumberPattern.test(control.value);
    return valid ? null : { invalidPhoneNumber: true };
  }

  ngOnInit(): void {
      this.showError = false; // Set to false to hide the error message
  }

  // Form submission
  onSubmit() {
    if (!this.reportForm.valid) {
      this.showError = true;
      this.ns.showNotification('Fill out the required parts', 'error');


      // this.formData = this.reportForm.value;
      // console.log(this.formData);

      //  // Clear form inputs by resetting the form
      //  this.reportForm.reset();
    } else {
      this.showError = false;
      this.ns.showNotification('Report Sent', 'success');
      this.reportForm.reset();
    }

  }
}
