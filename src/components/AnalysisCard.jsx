import { Row, Col } from "react-bootstrap"
import AnalysisCardSec from './AnalysiscardSec'

export default function AnalysisCard(props) {
  return( 
    <>
    
  <div className="card-section p-4 mb-3">

<h4 className='mb-3'> Analysis</h4>
<div className='d-flex'>
<i className="bi bi-eye-fill mr-2"></i>
<p>Only you</p>
</div>
<Row>
<Col md={4}>
<AnalysisCardSec icons={'bi bi-people-fill mr-2 font-18'
}  textTitle={'14 profile views'} description={'know who visited your profile.'} />
</Col>
<Col md={4}>
<AnalysisCardSec icons={'bi bi-bar-chart-line-fill mr-2'
} textTitle={'190 posts views'} description={'know who is interacting with your posts.'} />
</Col>
<Col md={4}>
<AnalysisCardSec icons={'bi bi-search mr-2'
} textTitle={'11 search views'} description={'know how many times people find you.'} />
</Col>
</Row>
</div>
</>
  )
}
