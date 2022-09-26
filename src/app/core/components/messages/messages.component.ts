import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {

  constructor(public messagesService: MessagesService) { }

  // ngOnInit(): void {
  // }

}
