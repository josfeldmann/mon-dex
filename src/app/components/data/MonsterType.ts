export class MonsterType {
  key: string;
  name: string;
  color: string;
  
  

  constructor(data: {
    key: string;
    name: string;
    color: string;
  }) {
    this.key = data.key;
    this.name = data.name;
    this.color = data.color;
    }
}