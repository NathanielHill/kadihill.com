import { Layout } from 'components/Layout'

const Index = (props) => (
  <Layout>
    <div className='header'>
      <div className='home-menu pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed'>
        <a className='pure-menu-heading' href=''>Kadi Hill Massage Therapy</a>
        <ul>
          <li className='pure-menu-selected'><a href='#'>Home</a></li>
          <li><a href='#booknow'>Book When I Get Back</a></li>
        </ul>
      </div>
    </div>
    <div className='splash-container'>
      <div className='splash'>
        <h1 className='splash-head'>Kadi Hill</h1>
        <p className='splash-subhead'>
          Let's Listen To Your Body
        </p>
        <p>
          {/* <!-- <a href="#booknow" className="pure-button pure-button-primary">Book Now</a> --> */}
        </p>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <h2 className='content-head is-center'>Invest In Your Health</h2>
        <div className='pure-g is-center'>
          <div className='l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4' />
          <div className='l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4'>
            <h3 className='content-subhead'>
              <i className='fa fa-location-arrow' />
              Location
            </h3>
            <div className='company-location-map'>
              <a href='https://maps.google.com/maps?q=1210%20Rosewood%20Ave,%20Austin,%20TX%2078702'>
                <img src='https://maps.google.com/maps/api/staticmap?center=1210%20Rosewood%20Ave,%20Austin,%20TX%2078702&zoom=16&size=300x130&maptype=roadmap&sensor=false&language=&markers=color:red|label:none|1210%20Rosewood%20Ave,%20Austin,%20TX%2078702' className='img-mobile' />
              </a>
            </div>
            <div className='company-location-address'>
              <a href='https://maps.google.com/maps?q=1210%20Rosewood%20Ave,%20Austin,%20TX%2078702' target='_blank'><p className='company-brick-and-mortar'>1210 Rosewood Ave<br />Austin, TX 78702</p></a>
            </div>
          </div>
          <div className='l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4'>
            <h3 className='content-subhead'>
              <i className='fa fa-clock-o' />
              Hours
            </h3>
            <div className='float-right'>
              <dl className='open-hours-table'>
                <dt>Mon</dt>
                <dd>
                  Closed
                </dd>
                <dt>Tue</dt>
                <dd>
                  Closed
                </dd>
                <dt>Wed</dt>
                <dd>
                  Closed
                </dd>
                <dt>Thu</dt>
                <dd>
                  Closed
                </dd>
                <dt>Fri</dt>
                <dd>
                  Closed
                </dd>
                <dt>Sat</dt>
                <dd>
                  Closed
                </dd>
                <dt>Sun</dt>
                <dd>
                  Closed
                </dd>
              </dl>
            </div>
          </div>
          <div className='l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4' />
        </div>
      </div>
      <div className='ribbon l-box-lrg pure-g'>
        <div className='l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5'>
          <img className='pure-img-responsive' alt='File Icons' width='300' src='static/kadi.jpg' />
        </div>
        <div className='pure-u-1 pure-u-md-1-2 pure-u-lg-3-5'>
          <h2 className='content-head content-head-ribbon'>About Kadi Hill</h2>
          <p>Kadi studied massage internationally, she began with traditional thai massage in southern Thailand, then moved to Australia to study Lomi Lomi, and studied Swedish and Deep Tissue in Austin. She values growth and strives to continue learning everyday.</p>
          <p>Through the development of her practice she hopes understand the human body deeply and to contribute to the well-being of herself and others. Kadi uses an empathetic approach to listening and provides an environment of safety and support so that clients may connect with their emotional and physical body. Her intention is to create awareness through touch and knowledge to relax the muscular system and bring relief to both mind and body.</p>
          <p>When she's not in the studio, you may find her exploring with her dog Fitzgerald or traveling with her husband Nathaniel. They like to travel slowly and soak up the culture wherever they are, and if the culture includes massage Kadi will be studying it!</p>
        </div>
      </div>
      <div id='booknow' className='content'>
        <h2 className='content-head is-center'>Kadi Hill Massage Is On Maternity Leave!</h2>

        <div className='pure-g'>
          <div className='l-box-lrg pure-u-1 pure-u-md-1-1 pure-u-lg-1-1'>
            <p>
              Please stay tuned and book when I get back! I am on currently on maternity leave and living abroad (as of May 2015). I will update the website and send out an email to all current clients when I return and am open for business.</p>
          </div>
        </div>
      </div>
      <div className='footer l-box is-center'>
        Copyright &#169; 2013-2018 Kadi Hill Massage
      </div>
    </div>
  </Layout>
)

export default Index
