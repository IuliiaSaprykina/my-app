import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';


init("user_7MmNAMDrOD4YCzlRmohr1");

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

// var data = {
//   service_id: 'YOUR_SERVICE_ID',
//   template_id: 'YOUR_TEMPLATE_ID',
//   user_id: 'YOUR_USER_ID',
//   template_params: {
//       'username': 'James',
//       'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//   }
// };

export class ContactsComponent implements OnInit {

  
  

  ngOnInit() {
  }

}
