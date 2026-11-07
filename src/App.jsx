import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main style={{ padding: "2rem", minHeight: "60vh" }}>
          <h1>Bem-vindo à página principal!</h1>
          <p>
          Este conteúdo é renderizado dinamicamente dentro da prop{" "}
          <code>children</code> do Layout.
        </p>
      </main>
    </Layout>
    </BrowserRouter>
  );
}
