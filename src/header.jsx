import "./App"
const Header=()=>{
    return(
        <header style={{border: "2px solid red" , display: 'flex' , justifyContent: "space-between","backgroundColor": 'cyan'}}>
        <h1>Example Site</h1>
      <nav>
      <a href=''>Home</a>
      <a href=''>Link</a>
      <a href=''>Drop-down</a>
      </nav>
      <button>logo</button>
      </header>
    )
        
    

}
export default Header




