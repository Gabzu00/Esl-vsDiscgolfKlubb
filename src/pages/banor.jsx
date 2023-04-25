import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"


function Banor() {

  return (
    <>
      <div className="row d-flex justify-content-center">
        <h1 className="row d-flex justify-content-center">Banor</h1>
        <div className="col-md-7">
          <Carousel >
            <Carousel.Item >
              <img
                className="d-block w-100 "
                src="public\Images.jpg\TrollsjönTräd.png"
                alt="First slide"
              />
              <Carousel.Caption className='bg-primary'>
                {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public\Images.jpg\TeepadEslöv.png"
                alt="Second slide"
              />

              <Carousel.Caption className='bg-primary'>
                {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="public\Images.jpg\Bankarta-1.png"
                alt="Third slide"
              />

              <Carousel.Caption className='bg-primary'>
                {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
              <img
                className="d-block w-100 "
                src="public\Images.jpg\Hål4Korg.png"
                alt="Fourth slide"
              />
              <Carousel.Caption className='bg-primary'>
                {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>

        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.4071479637773!2d13.286595476689893!3d55.83824887311596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46539561059b6abd%3A0xa7584f548e8a5f42!2sEsl%C3%B6vs%20Discgolfbana!5e0!3m2!1ssv!2sse!4v1682423234643!5m2!1ssv!2sse" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </>
  )
}

export default Banor