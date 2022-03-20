export interface Questionnaire {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
  aboutyou: string;
};

export class Questionnaire implements Questionnaire{
  constructor(
    public id: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public gender: string,
    public age: string,
    public aboutyou: string
  ) {}
}