import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isEmail = /\S+@\S+\.\S+/;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faMobileAlt = faMobileAlt;

  constructor(private fb: FormBuilder, private toast: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      let message = `${this.contactForm.get('name').value}\n
        ${this.contactForm.get('email').value}\n 
        ${this.contactForm.get('subject').value}\n
        ${this.contactForm.get('message').value}`;
      this.toast.success(message, "Message send", {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      })
    } else {
      this.toast.error("Fill the form correctly", "Not-valid", {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      })
    }
  }

  isValid(field: string): string {
    const validatedField = this.contactForm.get(field);
    return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  notRequiredValue(field: string): string {
    return this.contactForm.get(field).value ? 'is-valid' : '';
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]]
    })
  }

}
