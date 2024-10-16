import React from 'react'
import '../node_modules/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import pic1 from '../public/download.png'

const App = () => {
  return (
    <> 
    <div className='container' >
      <h1 className="text-center bg-warning text-light p-3" >Hello</h1>

    </div>
    <img className='bg-dark p-2'  src={pic1} alt="" />
    </>
  )
}

export default App