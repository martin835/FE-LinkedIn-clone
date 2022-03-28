

const AnalysisCardSec = (props) => {

    return(  
  <div className='d-flex'>
  <i className={props.icons}></i>
  <div>
  <h5 className='mb-1 font-16'>{props.textTitle}</h5>
  <span className="font-14">{props.description}</span>
  </div>
  </div>
  
    )
  }
  
  export default AnalysisCardSec