import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
export type MonsterDictionary = Record<string, Monster>;

export async function generateStaticParams() {
  const mList = new MonsterDatabase(monsters).getMonsterKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MonsterPage({ params }: { params: { id: string } }) {


  const db = new MonsterDatabase(monsters);
  
  

  const monster = db.getMonster(params.id);


  var t1 = db.getMonsterType(monster.monsterType[0]);
  var t2 = null;
  if (monster.monsterType.length > 1) {
    t2 = db.getMonsterType(monster.monsterType[1]);
  }


  return (


<html>
    <head>


    </head>
    <main style={{ fontFamily: 'sans-serif' }}>
      <h1>{monster.monsterName}</h1>
      <img src={`../data/Monster-Images/${monster.monsterKey}.png`}/>
      
      <p>Type: {t1.name} {t2?.name}</p>
      <p>Ability: {t1.name} {t2?.name}</p>


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