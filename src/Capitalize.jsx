export default function Capitalize(props){

    let text = props.content.charAt(0).toUpperCase();
    text += props.content.substring(1).toLowerCase();

    return (
        <span> {text} </span>
    )
}