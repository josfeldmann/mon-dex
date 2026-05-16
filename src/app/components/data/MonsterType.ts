export class MonsterType {
  key: string;
  name: string;
  
  

  constructor(data: {
    key: string;
    name: string;
  }) {
    this.key = data.key;
    this.name = data.name;
    }
}