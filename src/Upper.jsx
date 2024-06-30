export default function Upper(props) {
    let text = props.content.toUpperCase();

    return (
        <span>{ text}</span>
    )
}