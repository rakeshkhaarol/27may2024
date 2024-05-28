import React from 'react'
import not from '../../src/img/404-image.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Notfound() {
  return (
    <>

      <img className='img-404' src={not} alt='img' />

      <Link to={'/'}>
        <Button style={{ marginTop: '552px', marginLeft: 599, position: 'relative' }}>
          GO TO HOME
        </Button>
      </Link>
      <Link to={'/contact'}>
        <Button style={{ marginTop: '552px', marginLeft: 9, position: 'relative' }}>CONTACT US</Button>
      </Link>
    </>
  )
}

export default Notfound