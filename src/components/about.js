const About = ()=>{

  const style ={
      width:'70%',
      textAlign:'center',
      lineHeight:'20px',
      margin:'0 auto',

      h4:{
        fontSize:'30px',
        padding:'3rem',
      },
      a:{
        color:'blue',
        fontSize:'1.2rem'
      }
  }

    return(

      <div style={style}>
        <h4 style={style.h4}> ABOUT PAGE </h4>
        <p>This is a react-js application , which uses EDMAN Recipe API to fetch recipes
        based on users search. This was soley developed by <a style={style.a} href='https://www.linkedin.com/in/ajazul-miah-96283584/'>me</a> to practice
        React js and Redux toolkit.</p>

      </div>

    )
}

export default About
