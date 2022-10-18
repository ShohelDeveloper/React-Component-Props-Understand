//Functional Component
import InputGroup from "./component/input-group/inputGroup";
import Button from "./component/button/button";

function App() {
  return (
    <div
      style={{
        width: "50%",
        margin: "2rem auto",
        backgroundColor: "#fff",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h1 style={{ fontFamily: "Arial", fontSize: "2rem", color: "#222" }}>
          Sign Up
        </h1>
        <p style={{ fontFamily: "Arial", fontSize: "1rem", color: "#666" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          officiis?
        </p>
      </div>
      <form>
        <div>
        <InputGroup label = "What is your Name?" type='text'/>
        <InputGroup label = "What is your Email?" type='email'/>
        <InputGroup label = "What is your Password?" type='password'/>
       </div>
        <div>
         <Button text='Reset' type='reset' variant='warning'/> 
         <Button text='Submit' type = 'submit' variant='primary'/> 
        </div>
      </form>
    </div>
  );
}

export default App;

/**
 * When should me decide creating a new component?
 * 1. When we need to write duplicate code,
 * 2. Which data are different,
 */