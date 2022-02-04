import { Component, OnInit } from '@angular/core';

import { GreetingService } from 'src/services/greeting.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {
  show: boolean = false;

  constructor(private greetingService: GreetingService) {
  }

  ngOnInit(): void {
    this.greetingService.addResult.subscribe(
      (result: boolean) => {
        this.show = result;
        setTimeout(() => this.show = false, 3000);
      }
    )
  }

}
