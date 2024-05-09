import React from "react";
import SortBar from "./SortBar";
export default function Search() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="spacing">
          <div>
            <SortBar />
          </div>
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="search dish"
                aria-label="Search"
                style={{ maxWidth: "500px" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
