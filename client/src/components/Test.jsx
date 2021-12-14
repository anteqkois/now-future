import React, { useEffect } from 'react';
import{ MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

import useError from '../providers/ErrorContext';

function Test() {
  // const setError = useError();

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setError('Coś poszło nie tak!');
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [setError]);

  return (
    <>
      <p>Hello NowFuture</p>
      <MDBBtn>Button</MDBBtn>
      <MDBBtn className='mx-2' color='danger'>
        Danger
      </MDBBtn>
      <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='Fissure in Sandstone' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </>
  );
}

export default Test;
