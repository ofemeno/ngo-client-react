import { Link } from "react-router-dom";

export default function Hero() {
  const backgroundStyle = {
    backgroundImage: 'url("/hero-african-woman.jpg")',
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
  };
  return (
    <div className="hero" style={backgroundStyle}>
      <div className="text">
        <div className="cp-col caption">
          <span className="issue">the issue</span>
          <p className="heading">
            Climate change poses the biggest threat to women and children in developing
            nations
          </p>
          <Link to="">Read more about this environmental and social cause</Link>
        </div>
        <div className="cp-col"></div>
      </div>
    </div>
  );
}
