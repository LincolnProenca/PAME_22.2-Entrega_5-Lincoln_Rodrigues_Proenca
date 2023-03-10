import Header from "../Header";
import {
  Login2Cont,
  Cont,
  LoginContainer,
  EntrarCont,
  Texto,
  Input,
  Button,
  CadastroCont,
  Pcursor,
} from "./styles";

function Login(props) {
  function aumentaretapa() {
    console.log("teste");
    props.setEtapa((old) => (old < 1 ? old + 1 : 0));
  }
  console.log(props.texto1);

  return (
    <div>
      <Header></Header>
      <Cont>
        <LoginContainer cadastro={props.cadastro}>
          <h1>{props.texto1}</h1>
          <Login2Cont cadastro={props.cadastro}>
            <EntrarCont cadastro={props.cadastro}>
              <Texto>{props.texto2}</Texto>
              <Input placeholder="email"></Input>
              <Input placeholder="senha"></Input>
              <Pcursor>Esqueci minha senha</Pcursor>
              <Button onClick={aumentaretapa}>Entrar</Button>
            </EntrarCont>
            {props.cadastro ? (
              <CadastroCont>
                <Texto>Ainda não tenho cadastro</Texto>
                <Input placeholder="nome"></Input>
                <Input placeholder="sobrenome"></Input>
                <Input placeholder="email"></Input>
                <Input placeholder="senha"></Input>
                <Input placeholder="confirme a senha"></Input>
                <Button onClick={aumentaretapa}>Criar conta</Button>
              </CadastroCont>
            ) : (
              <></>
            )}
          </Login2Cont>
        </LoginContainer>
      </Cont>
    </div>
  );
}

export default Login;
