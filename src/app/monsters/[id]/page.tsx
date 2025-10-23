import { Monster } from '../../types/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/types/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
export type MonsterDictionary = Record<string, Monster>;

export async function generateStaticParams() {
  const mList = new MonsterDatabase(monsters).getKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MonsterPage({ params }: { params: { id: string } }) {


  const db = new MonsterDatabase(monsters);
  
  

  const monster = db.get(params.id);

  if (!monster) {
    notFound();
  }

  return (


<html>
    <head>
      <script defer dangerouslySetInnerHTML={{
            __html: `const Stats = [ ${monster.baseStats.HP}, ${monster.baseStats.ATTACK},${monster.baseStats.DEFENSE}, ${monster.baseStats.SPECIALATTACK}, ${monster.baseStats.SPECIALDEFENSE}, ${monster.baseStats.SPEED} ];`,
          }}/>
        

        <script src="https://cdn.jsdelivr.net/npm/chart.js" defer></script>

         <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels" defer></script>


        <script src="../scripts/statchart2.js" defer></script>
    </head>
    <main style={{ fontFamily: 'sans-serif' }}>
      <h1>{monster.monsterName}</h1>
      <img src={`../data/Monster-Images/${monster.monsterKey}.png`}/>
      
      <p>Type: {monster.monsterType[0]}</p>



  <canvas
  id="statChart"
  style={{
    display: "block",
    boxSizing: "border-box",
    height: "400px !important",
    width: "400px !important",
  }}
></canvas>




   

    






    </main>

</html>









  );
}