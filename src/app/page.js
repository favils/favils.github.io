import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="counter"><p>0</p></div>

      <section className="hero">
        <div className="overlay"></div>

        <nav>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">fatima</a>
            </div>
            <div className="nav-items">
              <p>digital studio</p>
            </div>
          </div>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">work</a>
              <a href="#">studio</a>
              <a href="#">contact</a>
            </div>
            <div className="nav-items">
              <a href="#">twitter</a>
              <a href="#">insta</a>
            </div>
            <div className="nav-items">
              <p>miami, fl</p>
            </div>
          </div>
        </nav>

        <div className="header">
          <h1>fatima</h1>
        </div>

        <div className="hero-img">
          <img src=""></img>
        </div>
      </section>

    </div>
  );
}
