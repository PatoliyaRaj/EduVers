import React from 'react'
import SimpleCarousel from './sliderforriv'
import { Button } from './../../../components/Button';
import eco2 from '../../../assets/imgs/eco2.jpg'

function ReviewSlider() {
  const element1 = <div><Button variant="primary">first slide</Button></div>;
  const element2 = <Button variant="primary">second slide</Button>;
  const element3 = <Button variant="primary">third slide</Button>;
  const element4 = <div><img src={eco2} alt="Eco 2" width={"100%"} height={"auto"} /></div>;
  const element5 = <div><img src={eco2} alt="Eco 2" width={"100%"} height={"auto"} /></div>;
  const element6 = <div><img src={eco2} alt="Eco 2" width={"100%"} height={"auto"} /></div>;
  const buttonArray = [ element4, element5, element6];
  return (
    <React.Fragment>
       <div className="h-auto bg-gray-100 flex items-center justify-center ">
        <SimpleCarousel elements={[...buttonArray]} autoPlay={true} autoPlayInterval={3000} pauseOnHover={true} />
       </div>
    </React.Fragment>
  )
}

export default ReviewSlider