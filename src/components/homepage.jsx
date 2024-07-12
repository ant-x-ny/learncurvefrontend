import './HomeStyle.css';
function HomePage(){
    return(
        <div className='BodyHome'>
            <div>
  <div style={{ height: '250px' }} />
  <div style={{ height: "100%", width: "100%" }}>
    <div
      style={{
        height: "250px",
        backgroundImage: "linear-gradient(to left,#F9F3F3,#cecccc,#F9F3F3)",
        backgroundSize: "200%",
        animation: "koop 0.7s linear infinite",
        width: "auto",
        paddingLeft: '20px'
      }}
    >
      <h2
        style={{
          margin: '20px',
          fontFamily: "monospace",
          fontSize: '70px',
          paddingTop: '5px',
          paddingLeft: '5px'
        }}
      >
        Hi i am Antony :)
      </h2>
      <p style={{ fontSize: '22px', paddingLeft: '65px', color:'black', fontFamily:'monospace' }}>
        welcome to my webpage...
      </p>
    </div>
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        paddingTop: '100px'
      }}
    >
      <a href='/error' ><button id="cmb">Contact Me</button></a>
    </div>
  </div>
</div>

        </div>
    )
}

export default HomePage;
