import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import React, { useState } from "react";

function PanelForm(props) {
  const [detail, setDetail] = useState("");

  function newItemCreateSubmittedHandler(eventArgs) {
    eventArgs.preventDefault();
    const temp = detail;
    setDetail("");
    props.onDetailsCreated(temp);
  }

  function titleChangedHandler(eventArgs) {
    setDetail(eventArgs.target.value);
  }

  return (
    <Container>
      <div className="row m-3 p-3 bg-primary new_expense_item justify-content-center">
        <div className="col-sm p-2 expense_date bg-info border border-white rounded justify-content-center text-center">
          <Form onSubmit={newItemCreateSubmittedHandler} name="expenseform">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Details</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Details"
                onChange={titleChangedHandler}
                value={detail}
              />
            </Form.Group>

            <Button className="m-2" variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default PanelForm;
