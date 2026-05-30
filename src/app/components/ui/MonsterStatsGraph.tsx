import React from "react";
import { Monster } from "../data/Monster";


type Props = {
  monster: Monster;
};

const MAX_STAT = 250;

export default function MonsterStatsGraph({ monster }: Props) {
  const stats = [
    { label: "HP", value: monster.baseStats.HP },
    { label: "Att", value: monster.baseStats.ATTACK },
    { label: "Def", value: monster.baseStats.DEFENSE },
    { label: "Sp.Att", value: monster.baseStats.SPECIALATTACK },
    { label: "Sp.Def", value: monster.baseStats.SPECIALDEFENSE },
    { label: "Speed", value: monster.baseStats.SPEED },
  ];

  return (
    <div className="container mt-4" style={{
      width: "600px",
    }} >
      <div className="">

        {stats.map((stat) => {
  const widthPercent = Math.min(
    (stat.value / MAX_STAT) * 100,
    100
  );

  return (
    <div
      key={stat.label}
      className="d-flex align-items-center mb-3"
      style={{ gap: "12px"}}
    >
      {/* Label + Stat Number */}
      <div
        className=""
        style={{
          width: "60px",
          textAlign: "left",
          flexShrink: 0,
        }}
      >
        {stat.label}: 
      </div>
      <div
        className=""
        style={{
          width: "30px",
          textAlign: "right",
          flexShrink: 0,
        }}
      >  
        {Math.round(stat.value)}
      </div>

      {/* Progress Bar */}
      <div
        className="progress flex-grow-1"
        style={{
          height: "28px",
          backgroundColor: "#e9ecef",
        }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${widthPercent}%`,
            transition: "width 0.5s ease",
          }}
          aria-valuenow={stat.value}
          aria-valuemin={0}
          aria-valuemax={MAX_STAT}
        />
      </div>
    </div>
  );
})}
        
      </div>
    </div>
  );
}