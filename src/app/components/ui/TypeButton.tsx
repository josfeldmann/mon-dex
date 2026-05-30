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
borderRadius: "3px",
minWidth: "60px",
display: "inline-block",
backgroundColor: "#" + data.color,
padding: "4px",
border:"1px",
color: "white",
WebkitFontSmoothing: "antiAliased",
textAlign:"center",

//textShadow: "#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px, #000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px; !important"
}
}>
    {data.name}
</div>  
</a>
);
}