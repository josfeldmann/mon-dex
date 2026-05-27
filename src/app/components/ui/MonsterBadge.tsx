import { Monster } from "../data/Monster";
import { MonsterDatabase } from "../data/MonsterDatabase";

type SplitBadgeProps = {
  data: Monster;
  size?: number;
};

export default function MonsterBadge({
  data,
  size = 120,
}: SplitBadgeProps) {

    const db = MonsterDatabase.getInstance();

    const type1 = db.getMonsterType(data.monsterType[0]);
    let type2 = type1;
    if (data.monsterType.length > 1) {
        type2 = db.getMonsterType(data.monsterType[1]);
    }

  return (
    <div
      className="relative overflow-hidden rounded-xl border-2 border-black shadow-md"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Top Half */}
      <div
        style={{
          backgroundColor: type1.color,
          height: "50%",
          width: "100%",
        }}
      />

      {/* Bottom Half */}
      <div
        style={{
          backgroundColor: type2.color,
          height: "50%",
          width: "100%",
        }}
      />

      {/* Optional Center Label */}
      {data.monsterName && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded bg-white/80 px-2 py-1 text-sm font-bold text-black">
            {data.monsterName}
          </span>
        </div>
      )}
    </div>
  );
}