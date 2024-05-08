import './Home.css'

const Home = () => {
  return (
    <div className="about-section" id="about">
      <div className="left-side">
        <img
          src="https://cdn.dribbble.com/users/2459530/screenshots/8029114/media/ec7402c26d95030fd111401b35482144.gif"
          alt="Delivery Man Cycling"
        />
      </div>
      <div className="right-side">
        <h2>Welcome to Foodies!</h2>
        <p>There is no love sincerer than the love of food.</p>
        <p>
          Foodies restraurant thereby invites you all to come and experience
          this love
        </p>
        <p>
          Although a great restaurant experience must include great food, a bad
          restaurant experience can be achieved through bad service alone.
          Ideally, service invaluable.That is why Our committed team of delivery
          experts guarantees that your orders are delivered promptly and
          attentively, ensuring that your meal arrives hot and fresh on every
          occasion.
        </p>
      </div>
    </div>
  );
};

export default Home;
