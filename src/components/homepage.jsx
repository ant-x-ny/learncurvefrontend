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
          fontSize: '52px',
          paddingTop: '5px',
          paddingLeft: '5px'
        }}
      >
        Hi i am Antony :)
      </h2>
      <p style={{ fontSize: '16px', paddingLeft: '20px', color:'black', fontFamily:'monospace' }}>
        welcome to my webpage... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur fuga omnis cum maxime dolores cumque rerum
        sed beatae aperiam quos eum deleniti quisquam, assumenda voluptatum,
        sunt facere libero voluptate ullam!
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
