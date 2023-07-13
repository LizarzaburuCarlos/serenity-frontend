import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  const goEspecialista = () => {
    navigate("/login-user");
  };

  const goPaciente = () => {
    navigate("/login-client");
  };

  return (
    <div className="body" style={{
      margin:0,
      padding:0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#cbd2e0",
      height:"100vh",
      width:"100%"
    }}>
      <div className="selection" style={{
          backgroundColor:"white",
          border:"2px solid #2d3648",
          borderRadius:"5px",
          boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding:"70px 50px",
          textAlign:"center"
      }}>
        <img
          className="imagen"
          style={{
            margin:"10px auto"
          }}
          src="/img/LogoAzul.png"
          alt="logo de serenity" />
        <h2
          className="titulo"
          style={{
            marginTop:"15px",
            fontWeight:"bold",
            fontSize:"20px"
          }}>
            ¡Bienvenido a Serenity!
        </h2>
        <p
          className="description"
          style={{
            fontSize:"18px",
            marginBottom:"30px"
          }}>
            ¿Que tipo de usuario eres?
        </p>
        <button
          className="especialista"
          onClick={goEspecialista}
          style={{
            border:"2px solid #2d3648",
            borderRadius:"3px",
            padding:"10px 20px",
            marginRight:"10px",
            fontWeight:"600",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2d3648";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#2d3648";
          }}
          >
            ESPECIALISTA
          </button>
        <button
          className="paciente"
          onClick={goPaciente}
          style={{
            border:"2px solid #2d3648",
            borderRadius:"3px",
            padding:"10px 20px",
            marginLeft:"10px",
            fontWeight:"600",
            color:"white",
            backgroundColor:"#2d3648"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#2d3648";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2d3648";
            e.currentTarget.style.color = "#ffffff";
          }}

          >
            PACIENTE
          </button>
      </div>
    </div>
  );
};

export default Page;
