import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { mainQuest } from "../../data/mockData";

export default function UserMainQuest(){
    return (
        <Container fluid>
        <Row>
          <span className="bg-secondary text-white p-3">My Quest</span>
          <div className="main-quest">
            <p>Main Quest</p>
            <Form>
              {mainQuest.map((type) => (
                <div key={type.id} className="mb-3">
                  <Form.Check type={"checkbox"} id={`check-api-${type}`}>
                    <Form.Check.Input type={"checkbox"} isValid />
                    <Form.Check.Label>{`${type.title}`}</Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
            </Form>
          </div>
        </Row>
      </Container>
    );
}