import Item from "./Item";

export default function Items(){
    var item={status:"done", task:"커피마시기", due:"20231120"}

    return ( <table>
        <td></td>
        <td>Task</td>
        <td>Due</td>
        <td></td>
        <Item item={item}/>
        <Item item={item}/>
        <Item item={item}/>
    </table>
    );
}