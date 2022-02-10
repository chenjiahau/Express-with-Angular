export interface IGreeting {
  id: number;
  priority: number;
  title: string;
  state: boolean;
  description: string;
}

export class Greeting {
  id: number;
  priority: number;
  title: string;
  state: boolean;
  description: string;

  constructor(greeting: IGreeting) {
    this.id = greeting.id;
    this.priority = greeting.priority;
    this.title = greeting.title;
    this.state = greeting.state;
    this.description = greeting.description;
  }
}