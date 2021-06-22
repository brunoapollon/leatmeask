import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import googleIconImg from "../assets/google-icon.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRomm() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salsas de Q&amp;A ao-vivo</strong>
        <p>Tire duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRomm} className="create-room">
            <img src={googleIconImg} alt="logo google" />
            Crie sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}