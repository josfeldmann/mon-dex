type SingleLineListProps = {
  items: string[];
  renderItem?: (item: string) => React.ReactNode;
};

export function SingleLineList({
  items,
  renderItem
}: SingleLineListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      {items.map((item, index) => (
        <span key={item}>
          {renderItem ? renderItem(item) : item}
          {index < items.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}






/*
type SingleLineListProps = {
  items: string[];
  labelPlural : string;
  labelSingle : string;
};

export function SingleLineList({ items, labelPlural, labelSingle }: SingleLineListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <strong>
        {items.length === 1 ? labelSingle : labelPlural}:
      </strong>{" "}
      {items.join(", ")}
    </div>
  );
}
*/