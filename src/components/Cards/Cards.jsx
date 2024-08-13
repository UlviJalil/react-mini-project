import React from 'react'
import './cards.scss'

const Cards = () => {
  return (
    <>
    <h1 className='cardh1'>Editor's Picks</h1>

    <div className='card-container'>
      

      <div className="card-wrapper">
        <div className="card-img">
          <button>GADGETS</button>
          <div className="card-text-wrapper">
          <div className="card-content">
            <h2>Study: Earbuds Use, <br /> Youngsters at High Risk of <br /> Hearing Loss</h2>
            <div className="alt-text">
              <p>Shane Doe</p>
              <p className='secondp'>Mar 15, 2020</p>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div className="card-wrapper2">
        <div className="card-img2">
          <button>TECHNOLOGY</button>
          <div className="card-text-wrapper2">
          <div className="card-content2">
            <h2>Telescope is Revealing the <br /> Galaxies of the Universe Like <br /> Never Before</h2>
            <div className="alt-text2">
              <p>Shane Doe</p>
              <p className='secondp2'>Mar 15, 2020</p>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div className="card-wrapper3">
        <div className="card-img3">
          <button>PHONES</button>
          <div className="card-text-wrapper3">
          <div className="card-content3">
            <h2>CarPlay Concept Shows Off a <br />Modular UI Inspired by Next- <br />Gen Design</h2>
            <div className="alt-text3">
              <p>Shane Doe</p>
              <p className='secondp3'>Mar 15, 2020</p>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div className="card-wrapper4">
        <div className="card-img4">
          <button>GADGETS</button>
          <div className="card-text-wrapper4">
          <div className="card-content4">
            <h2>Latest Windows 11 Preview <br /> Build Finally Lets You Search <br /> for Copied Text</h2>
            <div className="alt-text4">
              <p>Shane Doe</p>
              <p className='secondp4'>Mar 15, 2020</p>
              </div>
          </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Cards
