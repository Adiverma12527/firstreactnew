import logo from './logo.svg';
import './App.css'
function App(){
  return(
    <div className='App'>
    <img src={logo} className="App-logo" alt="logo" />
      <h1> benefits of usiing react...</h1>
    
    <p>1. component -based architecture</p>
    <p>2. virtual DOMfor efficient updates 
    </p>
    <p>3. rich ecosystem and community</p>
    <p>4.cross platform development </p>
    <p>5. strong community support</p>
    <button className="btn btn-primary"> get started</button>
    </div>
  )
} export default App;