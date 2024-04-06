import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Unleash Your Imagination with BookWise Hub</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              At BookWise Hub, we believe in the power of words to transport you to different worlds. Embark on a journey of imagination as you browse through our carefully curated selection of books. From fiction to non-fiction, our shelves are brimming with possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
