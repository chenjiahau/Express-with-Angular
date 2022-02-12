import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingService } from 'src/services/greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  greetingList = [];

  constructor(
    private router: Router,
    private greetingService: GreetingService
  ) {
  }

  ngOnInit(): void {
    this.greetingList = this.greetingService.list;
  }

  onSayGreeting(greeting: { priority: number, title: string }) {
    console.log(greeting);
  }

  navigateTo(where: string) {
    this.router.navigate(['/log'], {queryParams: {orderBy: 'id'}});
  }
}
