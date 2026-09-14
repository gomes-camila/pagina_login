import { useState } from "react";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function validarLogin() {
    if (email === "camila.gomes@gmail.com" && senha === "123456789") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }    
  }   
    
  return (
    <div>
      <h2>Login</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
      </div>
      
      <div>
        <button onClick={validarLogin}>Acessar</button>
      </div>
      
      <div>   
        <p>{mensagem}</p>
      </div>
    </div>
  );
}

export default Login;
