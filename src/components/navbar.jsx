import './Navstyle.css';
function NavBar(){
    return(
        <div className='BodyNav'>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between', alignItems:'center',height:'75px'/*, backgroundColor:'white'*/}}>
    <h1 style={{color:'black',fontSize:'45px',width:'25%'}}>HomePage</h1>
    <div style={{color:'black',display:'flex',justifyContent:'space-evenly',width:'66%',fontSize:'18px',height:'100%',alignItems:'center',padding:'0px'}}>
        <a href="/" className="nav-buttons"> Home</a>
        <a href="/error" className="nav-buttons"> About Us</a>
        <a href="/login" className="nav-buttons"> Login</a>
        <a href="/calculator" className="nav-buttons"> Calculator</a>
    </div>
    <div style={{width: "0%",height: '20px'}}></div>
    </div>
    </div>
    )
}

export default NavBar;