import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import NavBar from '@/app/components/ui/navbar';
export type MonsterDictionary = Record<string, Monster>;


export async function generateStaticParams() {
  const mList = MonsterDatabase.getInstance().getAbilityKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function AbilityPage({ params }: { params: { id: string } }) {

  

  const db = MonsterDatabase.getInstance();;
  
  

  const ability = db.getAbility(params.id);

  if (!ability) {
    notFound();
  }

  return (
  <div>
      <h1>{ability.key}</h1>
      
      <p>{ability.description}</p>
  </div>
  );
}