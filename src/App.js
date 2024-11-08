import './App.css';
import './header' ;
import ImageComponent from './image';
function App() {
  return (
    <div className="App">
      
      <header style={{border: "2px solid red" , display: 'flex' , justifyContent:'space-between', "backgroundColor": 'cyan'}}>
        <h1>Example Site</h1>
      <nav style={{width:"300px" ,border: "2px solid red",display: 'flex'}}>
      <a href=''>Home</a>
      <a href=''>Link</a>
      <a href=''>Drop-down</a>
      </nav>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <ImageComponent/>
    </div>
    <button >Example-Button</button>
    <div/>
   </div> 
   
);
}



export default App;
