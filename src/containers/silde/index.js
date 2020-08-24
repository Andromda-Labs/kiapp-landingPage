import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './styje.css'

import media from '../../responsive'

import Img001 from '../../assets/images/001.jpg'
import Img002 from '../../assets/images/002.jpg'
import Img003 from '../../assets/images/003.jpg'
import Img004 from '../../assets/images/004.jpg'
import Img005 from '../../assets/images/005.jpg'
import Img006 from '../../assets/images/006.jpg'
import Img007 from '../../assets/images/007.jpg'
import Img008 from '../../assets/images/008.jpg'
import Img009 from '../../assets/images/009.jpg'
import Img010 from '../../assets/images/010.jpg'

function Slide() {
  var images = [
    { img: Img001 },
    { img: Img002 },
    { img: Img003 },
    { img: Img004 },
    { img: Img005 },
    { img: Img006 },
    { img: Img007 },
    { img: Img008 },
    { img: Img009 },
    { img: Img010 },
    { img: Img004 },
    { img: Img005 },
    { img: Img006 },
    { img: Img007 },
    { img: Img004 },
    { img: Img005 },
    { img: Img006 },
    { img: Img007 }
  ]

  let withS

  if (media.superSmallDevice) {
    withS = 300
  } else if (media.smallDevice) {
    withS = 500
  } else if (media.mobile) {
    withS = 700
  } else if (media.desktop) {
    withS = 1000
  }

  console.log(withS)

  var imgSlides = () =>
    images.map((num) => <img className="Img" src={num.img} />)
  return (
    <div
      style={{
        width: '90%',
        height: 100
      }}
    >
      <Slider
        dots={false}
        slidesToShow={10}
        slidesToScroll={1}
        autoplay={true}
        arrows={false}
        autoplaySpeed={1000}
      >
        {imgSlides()}
      </Slider>
    </div>
  )
}
export default Slide
