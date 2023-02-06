import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="quiz">Quiz</Link>
      </nav>
    </div>
  );
}

export default Navbar
