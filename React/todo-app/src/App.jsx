import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            React + Vite
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#center">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#docs">
                  Docs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#social">
                  Community
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#next-steps">
                  Learn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="center" className="container text-center py-5">
        <div className="hero mb-4">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <h1 className="display-4 fw-bold">Get Started</h1>

        <p className="lead">
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>.
        </p>

        <button
          className="btn btn-primary btn-lg"
          onClick={() => setCount(count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <hr />

      {/* Next Steps */}
      <section id="next-steps" className="container py-5">
        <div className="row">

          {/* Docs */}
          <div className="col-md-6 mb-4" id="docs">
            <div className="card shadow h-100">
              <div className="card-body">
                <h2>📘 Documentation</h2>
                <p>Your questions, answered.</p>

                <a
                  href="https://vite.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success me-2"
                >
                  Explore Vite
                </a>

                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-info"
                >
                  Learn React
                </a>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="col-md-6 mb-4" id="social">
            <div className="card shadow h-100">
              <div className="card-body">
                <h2>🌍 Community</h2>
                <p>Connect with the Vite community.</p>

                <div className="d-flex flex-wrap gap-2">
                  <a
                    href="https://github.com/vitejs/vite"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://chat.vite.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Discord
                  </a>

                  <a
                    href="https://x.com/vite_js"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    X
                  </a>

                  <a
                    href="https://bsky.app/profile/vite.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info"
                  >
                    Bluesky
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;