import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup } from 'react-bootstrap';

const Gallery = () =>{
    return(
        <div className="container">

          <CardGroup>

            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="./images/Gallery_1.jpg" style={{height:'22rem'}}/>
              <Card.Body>
                <Card.Text>
                small illustration/icon? i made a couple of weeks ago, heavily inspired by 
                @cha_cha_art_ 's style, hope you like it!
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">20 July 2020</small>
                </Card.Footer>
                </Card.Body>
            </Card>

            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="./images/Gallery_2.jpg" style={{height:'23rem'}}/>
              <Card.Body>
                <Card.Text>
                  originalcharacter from ma fren @lukugusle.07
                  sorry for the lack of activity, I’ll try to catch up
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">29 November 2018</small>
                </Card.Footer>
                </Card.Body>
            </Card>

            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="./images/Gallery_3.jpg" style={{height:'22rem'}}/>
              <Card.Body>
                <Card.Text>
                  i hate green.jpg
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">24 March 2017</small>
                </Card.Footer>
                </Card.Body>
            </Card>

            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="./images/Gallery_4.jpg" style={{height:'22rem'}}/>
              <Card.Body>
                <Card.Text>
                the hue turns out quite differently in video ;v;
                Guys is it normal to draw guidelines AFTER you finish your drawing yes or nay
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">24 March 2017</small>
                </Card.Footer>
                </Card.Body>
            </Card>

          </CardGroup>
        </div>
    )
}

export default Gallery;