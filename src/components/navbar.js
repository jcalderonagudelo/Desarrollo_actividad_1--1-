import { Link } from "react-router-dom";
import SearchBar from "./search";


export default function NavBar() {
  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
  };

  const navContainerStyle = {
    backgroundColor: "#181d27",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };

  const handleSearch = (searchTerm) => {
    // Aquí puedes realizar la búsqueda utilizando el término de búsqueda (searchTerm)
    console.log('Búsqueda realizada con el término:', searchTerm);
  };

  return (
    <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/create" style={linkStyle}>
        Create
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/docs" style={linkStyle}>
        Documentation
      </Link>
      <Link to="/more" style={linkStyle}>
        More
      </Link>
      <SearchBar onSearch={handleSearch} />
      
    </div>
  );
}
