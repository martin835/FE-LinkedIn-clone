const ActivitiesCardSec = (props) => {

    return (

        <div className='d-flex' style={props.border}>
            <i className={props.icons}></i>
            <div className="mb-2">
            <h5 className="font-16">{props.titleText}</h5>
            <span className="font-14">{props.description}</span>
            </div>
        </div>

    )
}

export default ActivitiesCardSec