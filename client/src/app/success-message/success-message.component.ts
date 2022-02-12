import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GreetingService } from 'src/services/greeting.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit, OnDestroy {
  private addResultSubscription: Subscription;
  show: boolean = false;

  constructor(private greetingService: GreetingService) {
  }

  ngOnInit(): void {
    // this.greetingService.addResult.subscribe(
    //   (result: boolean) => {
    //     this.show = result;
    //     setTimeout(() => this.show = false, 3000);
    //   }
    // )
    this.addResultSubscription = this.greetingService.addResult.subscribe(
      (result: boolean) => {
        this.show = result;
        setTimeout(() => this.show = false, 3000);
      }
    )
  }

  ngOnDestroy(): void {
    this.addResultSubscription.unsubscribe();
  }

}
