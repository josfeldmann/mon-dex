import { Monster } from "../data/Monster";
import { MonsterDatabase } from "../data/MonsterDatabase";


type SplitBadgeProps = {
  data: Monster;
  size?: number;
};

export default function MonsterBadge({
  data,
  size = 192,
}: SplitBadgeProps) {

    const db = MonsterDatabase.getInstance();

    const type1 = db.getMonsterType(data.monsterType[0]);
    let type2 = type1;
    if (data.monsterType.length > 1) {
        type2 = db.getMonsterType(data.monsterType[1]);
    }

  return (
    <div id = {data.monsterKey + "card"} 
  style={{
    position: "relative",
    overflow: "hidden",
    
    width: size,
    height: size,

    opacity: 0,
    animation: "fadeIn 0s forwards",
    animationDelay: "0.25s",
  }}
>
  {/* Top Half */}
  <div
    style={{
      backgroundColor: "#" + type1.color,
      height: "50%",
      width: "100%",
      borderRadius: "40px 40px 0px 0px"
    }}
  />

  {/* Bottom Half */}
  <div
    style={{
      backgroundColor: "#" + type2.color,
      height: "50%",
      width: "100%",
      borderRadius: "0px 0px 40px 40px"
    }}
  />

  {/* Overlay */}
  <a
    href={`/monsters/${data.monsterKey}.html`}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      textDecoration: "none",
    }}
  >
    {/* Frame */}
    <img
      src="/data/MonsterFrame.png"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "192px",
        height: "192px",
        pointerEvents: "none",
        imageRendering: "pixelated"
      }}
    />

    {/* Monster */}
    <img
      src={`/data/Monster-images/${data.monsterKey}.png`}
      style={{
        position: "relative",
        zIndex: 1,
        width: "128px",
        height: "128px",
        objectFit: "contain",
        
        imageRendering: "pixelated"
      }}
    />

    {/* Name */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        color: "white",
        fontWeight: "bold",
        textShadow: "1px 1px 4px black",
      }}
    >
      {data.monsterName}
    </div>
  </a>
</div>
  );
}