import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='p-5 bg-dark text-light text-center positon-relative border-top-2 border-top-blue-100'>
      <div className='container'>
        <div className='d-md-flex align-items-start justify-content-evenly'>
          <div className='w-25 p-3 align-self-start text-left'>
            <h1>About 8ties</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consectetur omnis ad nobis impedit iste quasi eligendi sed at tempore. Hic deserunt veniam blanditiis ut ipsam assumenda distinctio dolore optio.
            </p>
          </div>
          <div className='w-25 p-3 align-self-start text-left'>
            <h3>Opening time</h3>
            <p className="lead">Mon - Sat. 9pm- 10am</p>

            <h3>Opening time</h3>
            <p className="lead">Mon - Sat. 9pm- 10am</p>
          </div>
          <div className='w-25 p-3 align-self-start text-left'>
            <h3>Follow Along</h3>
            <p className='lead social-icons'>
              <i className="bi bi-facebook h1 mx-2"></i>
              <i className="bi bi-twitter h1 mx-2"></i>
              <i className="bi bi-github h1 mx-2"></i>
            </p>
            <h3>Newsletter</h3>
            <input type="email" placeholder='Enter email'/>
          </div>
        </div>
      </div>
      <div className='container'>
          <p className='lead'>Copyright &copy; 2022. All right reserved.</p>

          <button className='position-absolute bottom-0 end-0 p-5' href='#'><i className="bi bi-arrow-up-circle-fill h1"></i></button>
      </div>
    </footer>
  )
}

export default Footer