import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function MainQuestTodo({data}) {
    const [isCheckForm, setIsCheckForm] = useState(false);
    const handleCheckForm = (e) => {
      setIsCheckForm(!isCheckForm);
      console.log(isCheckForm);
    };
  return (
    <Form onChange={handleCheckForm}>
      <Form.Check type={"checkbox"} id={`check-api-${data}`}>
        <Form.Check.Input type={"checkbox"} isValid />
        <Form.Check.Label
          style={
            isCheckForm === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >{`${data.title}`}</Form.Check.Label>
      </Form.Check>
    </Form>
  );
}
