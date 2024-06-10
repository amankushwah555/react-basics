import React from 'react'
import Video from '../../components/video/Video'
import Categoriesbar from '../../components/categoriesBar/Categoriesbar'
import { Container, Row, Col } from 'react-bootstrap'; 
const HomeScreen = () => {
  return (
<Container>
    <Categoriesbar/>
    <Row>
        {[...new Array(20)].map(()=>(
            <Col lg={3} md={4}>
                <Video/>
            </Col>
        ))


        }
    </Row>
</Container>
  )
}

export default HomeScreen