import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function Footer() {
    return (
        <footer>
            <Container>
                <Row className=''>
                  <Col className='text-center py-3'>
                    Copyright &copy; ShopNow
                  </Col>
                </Row>
                
            </Container>
        </footer>
    )
}

export default Footer
