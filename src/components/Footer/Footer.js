import React from "react";
import footer from "../../images/footer.jpg";

const Footer = () => (
  <div className="footer">
    <div className="image-container">
      <img src={footer} alt="Rick and morty footer" className="footerImg" />

      <p style={{ marginTop: 20, textAlign: "center" }}>
        Designed and developed by <a href="#">Harshit</a>, <a href="#">Karan</a>{" "}
        and <a href="#">Manan</a>.
      </p>
    </div>
    <div className="description">
      <p>
        {" "}
        Rick and Morty is an American animated show that isn't Game of Thrones.
        It's a show where you watch a drunk Rick leading a socially insecure
        Morty into crazy interdimensional adventures and not to forget the
        absolute dumbfuck JERRY!
      </p>
    </div>
  </div>
);

export default Footer;
