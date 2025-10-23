import { Monster } from '../../types/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/types/MonsterDatabase';
import Script from 'next/script'

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
    <main style={{ fontFamily: 'sans-serif' }}>
      <h1>{monster.monsterName}</h1>
      <img src={`../data/Monster-Images/${monster.monsterKey}.png`}/>
      <p>Type: {monster.monsterType[0]}</p>





   

    






    </main>









  );
}