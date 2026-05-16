export class Ability {
  key: string;
  name: string;
  description: string;
  

  constructor(data: {
    key: string;
    name: string;
    description: string;
  }) {
    this.key = data.key;
    this.description = data.description;
    this.name = data.name;
    }
}