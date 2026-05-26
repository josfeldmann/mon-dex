"use client";
export const dynamic = "force-static"; // ensures it's exported as static
import Link from "next/link";
import data from "../../../public/data/monsters.json";
import Script from "next/script";
import { useEffect } from "react";  
import MonsterGrid from "../components/ui/MonsterGrid";
import { MonsterDatabase } from "../components/data/MonsterDatabase";
import monsters from '../../../public/data/monsters.json'
import NavBar from "../components/ui/navbar";
import Movelist from "../components/ui/MoveList";




export default function MovesPage() {
  const db = new MonsterDatabase(monsters)


  const m = new MonsterDatabase(monsters).getAllMonsters();
  const l = db.getAllMoves();
  return (
    <html lang="en">
       <NavBar/>
        <h1>Moves</h1>

        <Movelist moves={l} />;

    </html>
  );
   
}
