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
  
  const mList = new MonsterDatabase(monsters).getLocationKeys();

  return mList.map(loc  => ({
    id: loc,
  }));
  

}


// ✅ Your page component
export default function LocationPage({ params }: { params: { id: string } }) {
 <NavBar urlprefix='.'/>

  const db = new MonsterDatabase(monsters);
  
  

  const location = db.getLocation(params.id);

  if (!location) {
    notFound();
  }

  return (


<html>
    <h1>{location.name}</h1>

</html>

  );
}