import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle'; // Stav formuláře
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      comments: ['', Validators.required],
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Zvýrazní chybná pole
      this.errorMessage = 'Prosím, vyplňte všechna povinná pole správně.';
      this.formStatus = 'idle';
      return;
    }

    this.formStatus = 'submitting';
    this.errorMessage = null;

    const emailData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: `
        Zpráva: ${this.contactForm.value.comments}
      `,
    };

    this.http.post('https://localhost:7140/api/email/send-email', emailData).subscribe({
      next: () => {
        console.log('E-mail byl úspěšně odeslán.');
        this.formStatus = 'success';
        this.contactForm.reset(); // Resetuje formulář
      },
      error: (err) => {
        console.log(err);
        this.formStatus = 'error';
        this.errorMessage = `Chyba při odesílání e-mailu. Zkuste to prosím později.`;
      },
    });
  }
}
