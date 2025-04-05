import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author1Name: 'John Doe',
  author3Alt: 'Image of Michael Johnson',
  review3:
    "5 stars - The system's reporting capabilities have provided valuable insights for our decision-making process.",
  author2Src:
    'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzQzOTU0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Logistics Coordinator',
  author3Src:
    'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzQzOTU0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1560787313-5dff3307e257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzQzOTU0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  heading1: 'Testimonials',
  author3Name: 'Michael Johnson',
  content1:
    "The industrial inventory management system has revolutionized our operations. It's user-friendly and has significantly improved our efficiency.",
  author4Name: 'Sarah Lee',
  author2Name: 'Jane Smith',
  author2Alt: 'Image of Jane Smith',
  review4:
    '5 stars - Our inventory accuracy has improved significantly since implementing this system.',
  author1Src:
    'https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzQzOTU0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Warehouse Manager',
  author4Alt: 'Image of Sarah Lee',
  review2:
    '5 stars - Highly recommend this system to any business looking to streamline their inventory management.',
  author4Position: 'Supply Chain Manager',
  author3Position: 'Operations Director',
  review1: '5 stars - Excellent product!',
}

Testimonial.propTypes = {
  author1Name: PropTypes.string,
  author3Alt: PropTypes.string,
  review3: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.string,
  author3Src: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  content1: PropTypes.string,
  author4Name: PropTypes.string,
  author2Name: PropTypes.string,
  author2Alt: PropTypes.string,
  review4: PropTypes.string,
  author1Src: PropTypes.string,
  author1Position: PropTypes.string,
  author4Alt: PropTypes.string,
  review2: PropTypes.string,
  author4Position: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
}

export default Testimonial
