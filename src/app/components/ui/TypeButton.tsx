import { Monster } from "../data/Monster";
import { MonsterDatabase } from "../data/MonsterDatabase";
import { MonsterType } from "../data/MonsterType";


type TypeButtonProps = {
  data: MonsterType;
  size?: number;
};

export default function TypeButton({
  data,
  size = 192,
}: TypeButtonProps) {

    
    

  return (
<a href={`/types/${data.key}.html`}>
<div
style={
{
borderRadius: "2px",

display: "inline-block",
backgroundColor: "#" + data.color,
padding: "4px"
}
}>
    {data.name}
</div>  
</a>
);
}