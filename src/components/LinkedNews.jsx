import LinkedNewsSec from "./LinkedNewsSec"

const LinkedNews = (props) => {
    return(

    <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
        <h6>{props.title}</h6>
        <i className="bi bi-info-square-fill font-14"></i>
        </div>
        <LinkedNewsSec news={'I want to fly high, over the rainbow, so high'} date={'1 hour ago • 1.238 readers'}/>
        <LinkedNewsSec news={'Somebody told me: Just do it'} date={'7 hour ago • 8.572 readers'}/>
        <LinkedNewsSec news={'Do thing you feel comfortable with or die'} date={'1 day ago • 11.238 readers'}/>
        <LinkedNewsSec news={'This is what we call news'} date={'4 days ago • 62.491 readers'}/>
        <LinkedNewsSec news={'Raggaeton music is the best '} date={'32 days ago • 1.001.238 readers'}/>

    </div>


    )
}

export default LinkedNews 