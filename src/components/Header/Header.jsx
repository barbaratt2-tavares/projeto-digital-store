import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import cartIcon from "../../assets/mini-cart.svg";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.topRow}>
        <div style={styles.logoWrapper}>
          <Logo />
        </div>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.searchInput}
          />
          <span onClick={handleSearch} style={styles.searchIcon} title="Buscar">
            {" "}
            🔍
          </span>
        </div>

        <div style={styles.actionsContainer}>
          <a href="/register" style={styles.registerLink}>
            Cadastre-se
          </a>

          <a href="/login" style={styles.loginButton}>
            Entrar
          </a>

          <div style={styles.cartWrapper}>
            <img
              src={cartIcon}
              alt="Carrinho de compras"
              style={styles.cartIcon}
            />
          </div>
        </div>
      </div>

      <nav style={styles.navRow}>
        <ul style={styles.navList}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navLink, ...styles.activeNavLink }
                  : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navLink, ...styles.activeNavLink }
                  : styles.navLink
              }
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navLink, ...styles.activeNavLink }
                  : styles.navLink
              }
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navLink, ...styles.activeNavLink }
                  : styles.navLink
              }
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    maxWidth: "100%",
    padding: "20px 40px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #ccc",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },
  searchContainer: {
    position: "relative",
    flex: 1,
    maxWidth: "559px",
  },
  searchInput: {
    width: "100%",
    height: "44px",
    padding: "0 40px 0 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#F8F9FA",
    outline: "none",
    fontSize: "14px",
  },
  searchIcon: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "16px",
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  registerLink: {
    fontSize: "16px",
    color: "#474747",
    textDecoration: "underline",
    textDecorationColor: "#474747",
    cursor: "pointer",
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "114px",
    height: "40px",
    backgroundColor: "#C92071",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "14px",
    borderRadius: "4px",
    textDecoration: "none",
  },
  cartWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "default",
  },
  cartIcon: {
    width: "24px",
    height: "24px",
  },
  navRow: {
    marginTop: "20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    padding: 0,
    margin: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#474747",
    fontSize: "16px",
    paddingBottom: "4px",
  },
  activeNavLink: {
    color: "#C92071",
    fontWeight: "bold",
    borderBottom: "2px solid #C92071",
  },
};

export default Header;
