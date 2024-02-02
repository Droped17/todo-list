import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import { Stack } from "react-bootstrap";
import MyTitle from "../MyTitle";
import { skills,inventoryItem } from "../../data/mockData";

export default function UserStatus() {
  return (
    <div className="user-status">
      <MyTitle icon={`icon`} text={`Status:`} size={`10`} />
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Preview</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <MyTitle icon={`icon`} text={`Skills:`} size={`10`} />
      <Row>
        <Container style={{ maxHeight: "200px", overflow: "auto" }}>
          {skills.map((mySkill) => (
            <div key={mySkill.id}>
              <MyTitle text={`${mySkill.skill}`} key={mySkill.id} />
              <ProgressBar now={mySkill.exp} />
            </div>
          ))}
        </Container>
      </Row>

      <Row>
        <MyTitle text={`Inventory:`} size={`10`} />
        <hr />
        <div className="d-flex flex-wrap">
          {inventoryItem.map((item) => (
            <Stack key={item.id} gap={3} direction="horizontal">
              <div>
                <Image
                  src={`${item.img}`}
                  style={{ maxHeight: "100px", width: "100%" }}
                  fluid
                />
              </div>
            </Stack>
          ))}
        </div>
      </Row>
    </div>
  );
}
