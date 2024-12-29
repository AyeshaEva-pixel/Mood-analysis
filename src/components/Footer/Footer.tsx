import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary pb-3 pt-4">
      <div className="biscuit-container">
        <p className="text-center text-white">
          &copy; Copyright 2024. All Rights Reserved by{" "}
          <Link to={"/"}>Oko Biscuit</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
