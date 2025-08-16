import React from 'react'
import SimpleCarousel from './sliderforriv'
import { Button } from './../../../components/Button';

function ReviewSlider() {
  const element1 = <Button variant="primary">first slide</Button>;
  const element2 = <Button variant="primary">second slide</Button>;
  const element3 = <Button variant="primary">third slide</Button>;
  const buttonArray = [element1, element2, element3];
  return (
    <React.Fragment>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <SimpleCarousel elements={buttonArray} />
       </div>
    </React.Fragment>
  )
}

export default ReviewSlider