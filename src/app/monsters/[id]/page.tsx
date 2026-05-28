import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import { SingleLineList } from '@/app/components/ui/SingleLineList';
import { GenericLink } from '@/app/components/ui/GenericLink';
import { MapLocation } from '@/app/components/data/MapLocation';
import NavBar from '@/app/components/ui/navbar';
import { MonsterMove } from '@/app/components/data/MonsterMove';
import Movelist from '@/app/components/ui/MoveList';
import MonsterBadge from '@/app/components/ui/MonsterBadge';
import TypeButton from '@/app/components/ui/TypeButton';
export type MonsterDictionary = Record<string, Monster>;

export async function generateStaticParams() {
  const mList = MonsterDatabase.getInstance().getMonsterKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MonsterPage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();;
  
  

  const monster = db.getMonster(params.id);


  const t1 = db.getMonsterType(monster.monsterType[0]);
  let t2 = null;
  if (monster.monsterType.length > 1) {
    t2 = db.getMonsterType(monster.monsterType[1]);
  }

 const locations : string[] = db.getAllLocationsWithMonster(params.id);

 const moves : MonsterMove[] = db.getMovesFromKeyList(monster.moves);



  return (


<div>
      <h1>{monster.monsterName}</h1>
      <MonsterBadge data={monster}/>      
      <p>
        <SingleLineList items={monster.monsterType} renderItem={(monsterType) => <TypeButton data={db.getMonsterType(monsterType)}/>} labelSingle='Type' labelPlural='types'  ></SingleLineList>
      </p>
      <p>
        <SingleLineList items={monster.abilities} renderItem={(ability) => (<GenericLink value={ability} basePath="../abilities/" />)} labelSingle='Ability' labelPlural='Abilities'  ></SingleLineList>
      </p>
      <p>
      <SingleLineList items={locations} renderItem={(location) => (<GenericLink value={location} basePath="../locations/" />)} labelSingle='Location' labelPlural='Locations'  ></SingleLineList>
      </p>

      <Movelist moves={moves} />;


    </div>

  );
}