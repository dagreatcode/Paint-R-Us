import React from "react";

export default function Login() {
  return (
    <>
      <div class="mb-3">
        <label htmlFor="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="exampleFormControlInput2" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Password Here"
        />
      </div>
    </>
  );
}
