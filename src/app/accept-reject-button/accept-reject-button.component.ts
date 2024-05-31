import { Component, EventEmitter, OnInit, Output } from '@angular/core';


type acceptReject = 'accept' | 'reject';
@Component({
  selector: 'app-accept-reject-button',
  templateUrl: './accept-reject-button.component.html',
  styleUrls: ['./accept-reject-button.component.scss'],
})
export class AcceptRejectButtonComponent implements OnInit {
  @Output() acceptRejectButtonEmitter: EventEmitter<acceptReject> = new EventEmitter<acceptReject>();
  constructor() { }

  ngOnInit() { }


}
