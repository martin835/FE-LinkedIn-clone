const LinkedNewsSec = (props) => {
    return(

<>
        <span className="font-14 text-one"> • {props.news}</span>
        <span className="ml-3 mb-2 font-10">{props.date}</span>
        </>
    )
}

export default LinkedNewsSec