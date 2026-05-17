type SingleLineListProps = {
  items: string[];
  labelPlural : string;
  labelSingle : string;
  renderItem?: (item: string) => React.ReactNode;
};

export function SingleLineList({
  items,
  labelPlural,
  labelSingle,
  renderItem
}: SingleLineListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <strong>
        {items.length === 1 ? labelSingle : labelPlural}:
      </strong>{" "}
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