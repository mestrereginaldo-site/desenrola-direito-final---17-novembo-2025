import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Main.tsx está carregando...");

// Verifica se o elemento root existe
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Elemento root não encontrado!");
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Erro: Elemento root não encontrado</div>';
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React app renderizado com sucesso!");
  } catch (error) {
    console.error("Erro ao renderizar React:", error);
    document.body.innerHTML = '<div style="padding: 20px; color: red;">Erro ao carregar a aplicação</div>';
  }
}
