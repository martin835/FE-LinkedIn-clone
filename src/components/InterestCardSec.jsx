

const InterestCardSec = (props) => {

    return(  
  <div className='d-flex'>
  <i className={props.icons}></i>
  <div>
  <h5 className='mb-2'>{props.textTitle}</h5>
  <span>{props.description}</span>
  </div>
  </div>
  
    )
  }
  
  export default InterestCardSec