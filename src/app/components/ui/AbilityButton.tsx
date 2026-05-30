import { Ability } from "../data/Ability";
import { Monster } from "../data/Monster";
import { MonsterDatabase } from "../data/MonsterDatabase";
import { MonsterType } from "../data/MonsterType";


type AbilityButtonProps = {
  data: Ability;
  size?: number;
};

export default function AbilityButton({
  data,
  size = 192,
}: AbilityButtonProps) {

    
    

  return (
<a href={`/abilities/${data.key}.html`}>
<div style={
    {
        
        backgroundColor : "blue",
        padding: "4px 10px 10px 10px",
        borderRadius: "8px",
        margin: "4px",
        
    }
}>
    <h4>{data.name}</h4>
    <div style={
        {
            backgroundColor : "white",
            color : "black",
            padding: "4px 10px 4px 10px",
            borderRadius: "8px"
        }
    }>
        {data.description}
    </div>
</div>  
</a>
);
}