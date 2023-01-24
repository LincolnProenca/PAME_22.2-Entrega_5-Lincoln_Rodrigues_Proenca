import Header from "../../../Components/Header";
import {
  Login2Cont,
  LoginContainer,
  EntrarCont,
  Texto,
  Input,
  Button,
  CadastroCont,
} from "./styles";

function Login(props) {
  function aumentaretapa() {
    console.log("teste");
    props.setEtapa((old) => (old < 1 ? old + 1 : 0));
  }

  return (
    <div>
      <Header></Header>
      <LoginContainer>
        <h1>Entre ou cadastre-se</h1>
        <Login2Cont>
          <EntrarCont>
            <Texto>Já sou cliente</Texto>
            <Input placeholder="email"></Input>
            <Input placeholder="senha"></Input>
            <p className="esqueci">Esqueci minha senha</p>
            <Button onClick={aumentaretapa}>Entrar</Button>
          </EntrarCont>
          <CadastroCont>
            <Texto>Ainda não tenho cadastro</Texto>
            <Input placeholder="nome"></Input>
            <Input placeholder="sobrenome"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="senha"></Input>
            <Input placeholder="confirme a senha"></Input>
            <Button onClick={aumentaretapa}>Criar conta</Button>
          </CadastroCont>
        </Login2Cont>
      </LoginContainer>
    </div>
  );
}

export default Login;
