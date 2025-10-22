import Link from "next/link";
import data from "../data/monsters.json";

export default function MonstersPage() {
  // Extract the dictionary of monsters
  const monsters = data.monsters;

  return (
    <main>
      <h1>Monster Index</h1>

      <div>
        {Object.entries(monsters).map(([key, monster]) => (
          <Link
            key={key}
            href={`./monsters/${key}.html`}
        >
            <h2 className="text-xl font-semibold">{monster.monsterName}</h2>
            
          </Link>
        ))}
      </div>
    </main>
  );
}