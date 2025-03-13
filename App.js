//Onde está toda a tela
//import logo from './logo.svg';
import './App.css';

const Professor = (props) => { //(ou usar Arrow function) para criar um componente
  return (
    <div>
      <h1>Professor {props.nome}</h1>
      <div>
        <h2>Disciplinas </h2>
        <ul>
          <li>{props.disc}</li>
          <li>{props.disc1}</li>
          <li>PHP</li>
        </ul>
      </div>
    </div>
  );
}
const App = () => { //(ou usar Arrow function) para criar um componente
  return (
    <div className="corpo">
      <Professor nome="JamesLindao" disc="C++" disc1="Python"/>
      <Professor nome="Sergio" disc="Analise OO"/>
      <Professor nome="Moranguinho"/>
    
      <div>
        <h2>Disciplinas</h2>
        <ul>
          <li>React</li>
          <li>PHP</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
