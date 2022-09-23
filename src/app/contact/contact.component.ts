import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public commentFC!: any;

  constructor(
    private fb: FormBuilder,
    private sendMailService: SendEmailService,
    private snackBar: MatSnackBar
  ) {
    this.commentFC = fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public sendEmail() {
    const name = this.commentFC.controls.name.value;
    const email = this.commentFC.controls.email.value;
    const data = {
      name: `${name} - ${email}`,
      message: this.commentFC.controls.message.value,
    };
    this.sendMailService.sendEmail(data).subscribe((res: any) => {
      if (res.success === 'true') {
        this.commentFC.controls.name.setValue('');
        this.commentFC.controls.email.setValue('');
        this.commentFC.controls.message.setValue('');
        this.snackBar.open('Correo enviado', '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3000,
        });
        return;
      }
      if(res.success === 'false'){
        this.snackBar.open('Error al enviar el correo', '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3000,
        });
        return;
      }
    });
  }
}
