import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>SERVICES</a></li>
        <li><a href='#'>FAQ</a></li>
        <li><a href='#'>CONTACT</a></li>
      </ul>
    </nav>
    <section className='content'>
      <div className='image'>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
      </div>
      <div className="option">
        <h2 >Think health. Think Massage</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ullam iste id dolore magni dolor amet quod eveniet? Provident consequatur quidem debitis nemo doloribus ratione ad! Sequi cupiditate tempora quasi.</p>
        <button>LEARN MORE ABOUT US</button>
        <button>CONTACT US</button>
      </div>
      <div className="para">
      <p className='special'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nihil nemo odit perferendis beatae molestias eius pariatur fuga commodi labore et qui debitis blanditiis voluptatum iure ea? Animi, tempore harum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nihil nemo odit perferendis beatae molestias eius pariatur fuga commodi labore et qui debitis blanditiis voluptatum iure ea? Animi, tempore harum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nihil nemo odit perferendis beatae molestias eius pariatur fuga commodi labore et qui debitis blanditiis voluptatum iure ea? Animi, tempore harum?</p>
      </div>


      
      <hr />
      <div className="last">
      <h3 className='wellness'>
        Family Wellness Massage Theraphy
      </h3>
      <p>Lorem, ipsum dolor sit amet consectetur </p>
      <p> phone : 8426516513
      </p>
      </div>
    </section>
    <footer>
      <p>Copywrite @ vister all rights reserved</p>
    </footer>
    </>
  )
}

export default App
