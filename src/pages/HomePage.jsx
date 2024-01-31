import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyTitle from "../compomemts/MyTitle";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { skills, inventoryItem, thisMonth, mainQuest } from "../data/mockData";
import { Stack } from "react-bootstrap";
import { useState } from "react";

export default function HomePage() {

  return (
    <div>
      <Container fluid className="">
        <Row>
          <p>Your Name</p>
          <Col xs={12} sm={6} md={2}>
            <p>Date time</p>
            <p>**Note</p>
            <Image
              src="https://images.unsplash.com/photo-1706402500309-597ba87c8f3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxHeight: 200, width: "100%" }}
              fluid
            />
            <Container fluid>
              <p>Life:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
            <Container fluid>
              <p>Life:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
            <Container fluid>
              <p>Coin:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
            <Container fluid>
              <p>Gen:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <MyTitle icon={`icon`} text={`Status:`} size={`10`} />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Preview</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Image
              src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxHeight: 200, width: "100%" }}
              fluid
            />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Quest Board</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Container fluid>
              <MyTitle text={`This month`} />

              <Row className="gy-3 gx-3">
                {thisMonth.map((cardItem) => (
                  <Col key={cardItem.id} xs={12} sm={6} md={6}>
                    <Card style={{ height: "200px", minWidth: "100px" }}>
                      <Card.Img
                        variant="top"
                        src={`${cardItem.img}`}
                        style={{ height: "100px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title>{cardItem.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>

          <Col xs={12} sm={6} md={2}>
            <Container fluid>
              <Row>
                <span className="bg-secondary text-white">My Quest</span>
                <div className="main-quest">
                  <p>Main Quest</p>
                  <Form>
                    {mainQuest.map((type) => (
                      <div key={type.id} className="mb-3">
                        <Form.Check
                          type={"checkbox"}
                          id={`check-api-${type}`}
                          
                        >
                          <Form.Check.Input type={"checkbox"} isValid />
                          <Form.Check.Label>{`${type.title}`}</Form.Check.Label>
                        </Form.Check>
                      </div>
                    ))}
                  </Form>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
