export class MonsterMove {
  key: string;
  name: string;
  description: string;
  type : string;
  

  constructor(data: {
    key: string;
    name: string;
    description: string;
    type : string;
  }) {
    this.key = data.key;
    this.description = data.description;
    this.name = data.name;
    this.type = data.type;
    }
}