import "./header.scss";
import imgCouple from "../assets/img/couple.jpg";

export const Header = () => {
  return (
    <header>
      <div className="img-title-container">
        <div
          className="imageHeader"
          style={{ backgroundImage: `url(${imgCouple})` }}
        ></div>
        <div className="titleHeader">
          <h3>Nuestro Casamiento</h3>
          <hr />
          <h1>Gabriel & Jesica</h1>
        </div>
      </div>
    </header>
  );
};
