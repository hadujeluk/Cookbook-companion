import React from "react";
import SortBar from "./SortBar";
import Addrecipe from "./Addrecipe";


export default function Search({ searchInput, setSearchInput, }) {

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="spacing">
          <div>
            <Addrecipe />
          </div>
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
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
