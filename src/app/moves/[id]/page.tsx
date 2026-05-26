import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import NavBar from '@/app/components/ui/navbar';
import MonsterGrid from '@/app/components/ui/MonsterGrid';
import Movelist from '@/app/components/ui/MoveList';
export type MonsterDictionary = Record<string, Monster>;


export async function generateStaticParams() {
  
  const mList = new MonsterDatabase(monsters).getMoveKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}


// ✅ Your page component
export default function AbilityPage({ params }: { params: { id: string } }) {


  const db = new MonsterDatabase(monsters);
  
  

  const move = db.getMove(params.id);

  if (!move) {
    notFound();
  }

  const m = db.getAllMonstersWithMove(move);

  return (


<html>
   <NavBar/>
    <h1>{move.name}</h1>

    <Movelist moves={[move]} />;

    <h2>Monsters that learn this move</h2>
    <MonsterGrid monsters={m} imageSize={96} urlprefix='..'  />



</html>

  );
}