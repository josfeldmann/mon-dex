export class Ability {
  key: string;
  description: string;
  

  constructor(data: {
    key: string;
    description: string;
  }) {
    this.key = data.key;
    this.description = data.description;
    }
}