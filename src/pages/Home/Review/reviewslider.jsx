import React from 'react'
import SimpleCarousel from './reusableslider'
import bgpick from '../../../assets/imgs/BgpickDark2.jpg'
import { DataOfReview } from './DataofReview';
import ReviewCard from './reviewCards';


function ReviewSlider() {
  const reviewElements = DataOfReview.map((review, index) => (
    <ReviewCard key={index} {...review} />
  ));

  return (
    <React.Fragment>
       <div className="h-auto flex items-center justify-center p-4" style={{
         backgroundImage: `url(${bgpick})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         minHeight: '600px'
       }}>
        <SimpleCarousel 
          elements={reviewElements} 
          autoPlay={true} 
          autoPlayInterval={3000} 
          pauseOnHover={true} 
          className="bg-transparent"
          style={{  
            width: '100%',
            minHeight: '500px'
          }} 
        />
       </div>
    </React.Fragment>
  )
}

export default ReviewSlider