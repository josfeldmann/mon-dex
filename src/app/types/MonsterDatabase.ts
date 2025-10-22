import { MonsterDictionary } from "./MonsterDictionary";
import { Monster } from "./Monster";

export class MonsterDatabase {
  monsters: MonsterDictionary;

  constructor(data: { monsters: Record<string, Monster> }) {
    // Convert each plain object into a Monster instance
    this.monsters = Object.entries(data.monsters).reduce((acc, [key, value]) => {
      acc[key] = new Monster(value);
      return acc;
    }, {} as MonsterDictionary);
  }

  // Example: get monster by name
  get(name: string): Monster | undefined {
    return this.monsters[name];
  }

  // Example: get all monsters as an array
  getAll(): Monster[] {
    return Object.values(this.monsters);
  }

  getKeys() : string[] {
    return Object.keys(this.monsters);
  }
}