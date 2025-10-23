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
         <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
        
      </head>
      <body>


        <h1>Monster Stats</h1>


        <canvas id="graph" width="300px" height="200px"></canvas>

        
    

        {/* ✅ This WILL appear in the static HTML */}
        <h1>Monster Index</h1>
        

      <div key="containertest">
      <h3 className="mb-3 text-center">Monster Grid</h3>

      <div className="row row-cols-auto g-2" id="monster-grid">
      
      

        {Object.entries(monsters).map(([key, monster]) => (

          <div key={monster.monsterKey}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "172px",
    margin: "10px auto",
  }}
>
  <img
    src={`./data/Monster-Images/${monster.monsterKey}.png`}
    alt="Example Monster"
    style={{
      imageRendering: "pixelated",
      width: "128px",
      height: "128px",
      objectFit: "contain",
      marginBottom: "8px",
    }}
  />
  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
    <Link
            key={key}
            href={`./monsters/${key}.html`}
        >
          {monster.monsterName}
        </Link>
  </span>
</div>
        ))}

        </div>
    </div>
      



        
      </body>
    </html>
  );
   
}

/*

<div key={monster.monsterKey} style={{
              height: "150px",
              width: "150px",
            }}>
          

            <img src=/>

            <h2 className="text-xl font-semibold">{monster.monsterName}</h2>
            
          </Link>
          </div>



*/