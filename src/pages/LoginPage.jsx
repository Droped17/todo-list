import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../context/auth";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { userLoggedIn } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!userLoggedIn) {
      setIsSignIn(true);
      await doSignInWithEmailAndPassword(input.email, input.password);
    }
  };

  const handleOnChange = (e) => {
    setInput({...input, [e.target.name] : e.target.value});
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    if (!userLoggedIn) {
      setIsSignIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSignIn(false);
      });
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={`/`} replace={true} />}
      <main>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleOnChange}/>
            </Form.Group>
            <Button type="submit" onClick={handleOnSubmit}>Login</Button>
          </Form>
          <Button type="submit" onClick={(e) => handleGoogleLogin(e)}>
            Google Login
          </Button>
        </Container>
      </main>
    </div>
  );
}
