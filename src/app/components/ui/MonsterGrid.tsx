
import Image from "next/image";
import Link from "next/link";
import { Monster } from "../data/Monster";
import MonsterBadge from "./MonsterBadge";


type GridProps<T> = {
  items: T[];
  columns?: number;
  gap?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
};

function Grid<T>({
  items,
  columns = 4,
  gap = 16,
  renderItem,
}: GridProps<T>) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

type MonsterGridProps = {
  monsters: Monster[];
  columns?: number;
  imageSize?: number;
};

export default function MonsterGrid({
  monsters,
  columns = 5,
  imageSize = 96,
}: MonsterGridProps) {
  return (
    <Grid
      items={monsters}
      columns={columns}
      renderItem={(monster) => (
        <MonsterBadge data={monster} />
      )}
    />
  );
}