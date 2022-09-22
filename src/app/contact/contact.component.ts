import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public commentFC!: any;

  constructor(
    private fb: FormBuilder,
    private sendMailService: SendEmailService
  ) {
    this.commentFC = fb.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public sendEmail(){
    const name = this.commentFC.controls.name.value;
    const email = this.commentFC.controls.email.value;
    const data = {
      name: `${name} - ${email}`,
      message: this.commentFC.controls.message.value
    };
    this.sendMailService.sendEmail(data).subscribe((res: any) => {
      console.log(res);
    });
  }

}
