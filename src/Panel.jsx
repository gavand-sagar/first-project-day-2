export default function Panel(props){

    let header = (props.heading  == "Spring") ? "Spring Boot" : props.heading ;


    let ratingText = "";
    let index = 0;
    for (; index < props.rating; index++) {
        ratingText+="❤️";
    }
    for (; index < 5; index++) {
        ratingText+="🖤";
    }

    return(
        <div className="panel-container">
            <div className="heading">{header}</div>
            <div className="content">{props.content}</div>
            <div className="content">{ratingText}</div>
        </div>
    )
}