import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>

      <h1 style={{textAlign:'center', marginTop:250}}>
        This Page Contant Is Not Available .
      </h1>
      <h1 style={{textAlign:'center'}}> ---------So Plase Try Agan---------    </h1>

      <Link to={'/'} style={{marginLeft:710}}>
        <Button style={{marginTop:100}}>GO TO HOME</Button>
      </Link>
    </>


  )
}

export default Contact