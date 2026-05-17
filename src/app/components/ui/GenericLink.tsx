type LinkProps = {
  value: string;
  basePath: string;
};

export function GenericLink({
  value,
  basePath,
}: LinkProps) {
  return (
    <a href={`${basePath}${encodeURIComponent(value)}.html`}>
      {value}
    </a>
  );
}