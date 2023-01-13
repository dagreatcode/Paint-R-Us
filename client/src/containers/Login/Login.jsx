import React from "react";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="mb-3" style={{textAlign: "center"}}>Login</div>
        </div>
        <div className="row">
          <div className="col-sm-12" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Password Here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// margin: "auto",