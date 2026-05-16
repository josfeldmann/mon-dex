export class MapLocation {
  key: string;
  name: string;
  description: string;
  monsters: string[];
  

  constructor(data: {
    key: string;
    name: string;
    description: string;
    monsters: string[];
  }) {
    this.key = data.key;
    this.description = data.description;
    this.name = data.name;
    this.monsters = data.monsters;
    }
}