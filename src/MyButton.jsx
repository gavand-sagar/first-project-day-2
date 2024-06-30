import Capitalize from "./Capitalize";

export default function MyButton(props) {  // its function (so it can accep params)
    return (
        <button className="btn">
            <Capitalize content={props.content}/>
        </button>
    )
}

