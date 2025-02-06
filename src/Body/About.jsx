import "./styles/about.scss";

const About = () => {
  return (
    <div>
      <div className="img-container">
        <img className = "about-us-hero-img" src="https://images.unsplash.com/photo-1592417817038-d13fd7342605?q=80&w=2953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h1 className="about-us-hero-text">Better food for more people</h1>
      </div>

      <div className="history">
        <div className="sub-title">Our History</div>
        <h2>We Champion Restaurants from Coast to Coast</h2>
        <div>
          <div>
            <div className="delivery">
              <img src="https://images.unsplash.com/photo-1571175351975-2428c97b098e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
            <div>
              <h3>Over the years</h3>
              <div className="subtext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div>
                <div>
                  <span>71000+</span>
                  <span>Daily Order</span>
                </div>

                <div>
                  <span>$5B+</span>
                  <span>Tips To Driver</span>
                </div>

                <div>
                  <span>32M</span>
                  <span>Dinners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
