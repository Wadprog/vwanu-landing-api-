import React from 'react'
import img1 from '../../assets/img/img1.jpg'
import './index.css'
function ImageComponent(props) {
  return (
    <div class="img-container">
      <div class="img-card">
        <div class="img-imgBx">
          <img
            alt=""
            src={
              props.src
                ? props.src
                : 'https://source.unsplash.com/user/c_v_r/600x600'
            }
          />
        </div>
        <div class="img-content">
          <h2>Card One</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageComponent
