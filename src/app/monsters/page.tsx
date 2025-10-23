"use client";
export const dynamic = "force-static"; // ensures it's exported as static
import Link from "next/link";
import data from "../../../public/data/monsters.json";
import Script from "next/script";
import { useEffect } from "react";  




export default function MonstersPage() {
  // Extract the dictionary of monsters
  const monsters = data.monsters;
  const test = data.monsters.Shibu;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Monster Stats</title>
        <script defer dangerouslySetInnerHTML={{
            __html: `const globint = ${test.baseStats.ATTACK}; console.log("globint =", globint);`,
          }}/>
        <script src="https://cdn.jsdelivr.net/npm/chart.js" defer></script>
        <script src="./scripts/statchart.js" defer></script>
        
      </head>
      <body>


        <h1>Monster Stats</h1>


        <canvas id="graph" width="300px" height="200px"></canvas>

        
    

        {/* ✅ This WILL appear in the static HTML */}
        <h1>Monster Index</h1>
        <div>
        {Object.entries(monsters).map(([key, monster]) => (
          <Link
            key={key}
            href={`./monsters/${key}.html`}
        >

            <img src={`./data/Monster-Images/${monster.monsterKey}.png`}/>

            <h2 className="text-xl font-semibold">{monster.monsterName}</h2>
            
          </Link>
        ))}
      </div>



        
      </body>
    </html>
  );
   
}

/*





*/