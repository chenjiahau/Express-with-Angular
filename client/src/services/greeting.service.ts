export class GreetingService {
  list = [
    { priority: 1, title: "Hi" },
    { priority: 1, title: "Welcome" }
  ];

  constructor() { }
  
  addGreeting(priority: number, title: string) {
    this.list.push(
      {
        priority,
        title
      }
    )
  }
}