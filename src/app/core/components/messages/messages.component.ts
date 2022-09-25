import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(public messagesService: MessagesService) { }

  // ngOnInit(): void {
  // }

}
