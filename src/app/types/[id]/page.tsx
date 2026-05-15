import { Monster } from '../../components/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
export type MonsterDictionary = Record<string, Monster>;


export async function generateStaticParams() {
  return [{id : "fuck"}];
  

}

// ✅ Your page component
export default function TypePage({ params }: { params: { id: string } }) {

  return (


<html>
    
    <main style={{ fontFamily: 'sans-serif' }}>
      
    </main>

</html>

  );
}