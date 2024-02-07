import { useState } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { doCreateUserWithEmailAndPassword } from "../context/auth";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {

  const {userLoggedIn} = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isRegister, setIsRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!isRegister) {
      setIsRegister(true);
      await doCreateUserWithEmailAndPassword(input.email, input.password);
    }
  };
  const handleOnChangeForm = (e) => {
    setInput({...input,[e.target.name] : e.target.value});
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={`/`} replace={true} />}
      <main>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={input.email} onChange={handleOnChangeForm}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={input.password} onChange={handleOnChangeForm}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={input.confirmPassword} onChange={handleOnChangeForm}/>
            </Form.Group>
            <Button type="submit" onClick={handleOnSubmit}>Register</Button>
          </Form>
        </Container>
      </main>
    </div>
  );
}
