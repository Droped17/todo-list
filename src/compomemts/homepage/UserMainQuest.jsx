import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { mainQuest } from "../../data/mockData";
import MainQuestTodo from "./MainQuestTodo";

export default function UserMainQuest() {
  return (
    <Container fluid>
      <Row>
        <span className="bg-secondary text-white p-3">My Quest</span>
        <div className="main-quest">
          <p>Main Quest</p>
          {mainQuest.map((type) => (
            <div key={type.id} className="mb-3">
              <MainQuestTodo data={type}/>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
}
