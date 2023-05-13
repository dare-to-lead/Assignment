import React from "react";

function SingleCard(props) {
  return (
    <div>
      <div className="card border-0">
        <div className="row g-5 ms-4">
          <div className="col-md-6">
            <div className="card-body" id={props.id}>
              <h1 className="card-title mt-2 mb-5">{props.title}</h1>
              <p className="card-text mb-5 fs-5">{props.para}</p>
              <div className="pt-5">
                <a href="/" className="card-text text-dark fw-bold">
                  <span className="me-5">{props.link}</span>
                  <img src={props.linkSrc} alt="some link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={props.img}
              className="img-fluid rounded-start w-100"
              alt="Robots"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
