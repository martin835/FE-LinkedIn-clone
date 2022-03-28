const LanguagesCardSec = (props) => {

    return (

        <div className='d-flex' style={props.border}>
            <div className="mb-2 mr-1">
            <h5 className="font-16">{props.titleText}</h5>
            <span className="font-14">{props.description}</span> 
            </div>
        </div>

    )
}

export default LanguagesCardSec