import ResourcesCardSec from "./ResourcesCardSec"

export default function ResourcesCard(props) {
  return( 
    <>
  <div className="card-section p-4 mb-3">

<h4 className='mb-3'> Resources</h4>
<div className='d-flex'>
<i className="bi bi-eye-fill mr-2"></i>
<p>Only you</p>
</div>
<ResourcesCardSec icons={'bi bi-rss mr-2'} titleText={'Content creator mode'} description={'Get known, put your content on your profile.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}}/>
<ResourcesCardSec icons={'bi bi-people-fill mr-2 font-18'} titleText={'My network'} description={'Save and edit your network.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}}/>
<ResourcesCardSec icons={'bi bi-newspaper mr-2'} titleText={'Activities'} description={'Find the shared post from your network.'}/>

</div>
</>
  )
  
}
