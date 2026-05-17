import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import NavBar from '@/app/components/ui/navbar';
import MonsterGrid from '@/app/components/ui/MonsterGrid';
export type MonsterDictionary = Record<string, Monster>;

export async function generateStaticParams() {
  const mList = new MonsterDatabase(monsters).getTypeKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MonsterTypePage({ params }: { params: { id: string } }) {


  const db = new MonsterDatabase(monsters);
  
  

  const type = db.getMonsterType(params.id);

  const typemonsters = db.getAllMonstersWithType(type);

  if (!type) {
    notFound();
  }

  return (


<html>
     <NavBar urlprefix='..'/>
    <main style={{ fontFamily: 'sans-serif' }}>
      <h1>{type.key}</h1>
      
      <h2>Monsters With Type</h2>

    <MonsterGrid monsters={typemonsters} imageSize={96} urlprefix='..'  />


    </main>

</html>

  );
}