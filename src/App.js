import './App.css';
import DemoFormContainer from './Components/DemoForm/DemoFormContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <DemoFormContainer state={props.state} />
    </div>
  );
}

export default App;
