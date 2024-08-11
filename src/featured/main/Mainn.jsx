import React from 'react'
import './main.scss'
import wrappergirl from '../../assets/images/wrapper-girl-img.jpg'
import wrappercard1 from '../../assets/images/wrapper-card-1.jpg'
import wrappercard2 from '../../assets/images/wrapper-card-2.jpg'


const Main = () => {
  return (

    <div className='wrapper-container'>

      <div className="wrapper-girl">
        <div className="wrapper-girl-content">
          <button>GADGETS</button>
          <h1>Save $25 on Philips Wired Headphone For A </h1>
          <h1 className='secondh1'>Great Sounding Over-Ear Headphone</h1>
        </div>
      </div>
      {/* End of Wrapper Girl */}

      <div className="wrapper-cards">
        <div className="wcard-wrapper">
          <div className="wcard">
            <button>TECHNOLOGY</button>
            <div className="wcard-content">
              <h2>Tablet PC Market to Witness Exponential <br /> Growth by 2028, Sources Say</h2>
              <p>Shane doe Jan 11,2020</p>
            </div>
          </div>
        </div>
        <div className="wcard2-wrapper">
          <div className="wcard2">
            <button>TECHNOLOGY</button>
            <div className="wcard2-content">
              <h2>Tablet PC Market to Witness Exponential <br /> Growth by 2028, Sources Say</h2>
              <p>Shane doe Jan 11,2020</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Main
