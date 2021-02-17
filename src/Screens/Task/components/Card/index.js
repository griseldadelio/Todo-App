import React, { useState } from "react";
import { api } from "../../../../utils";
import "./card.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const CardTask = ({ title, description, assigned, date, status, id }) => {
    const [taskStatus, setTaskStatus] = useState(status);

    const getCardColor = () => {
        switch (taskStatus) {
            case "pending":
                return "border-start-pending";
            case "canceled":
                return "border-start-canceled";
            default:
                return "border-start-success";
        }
    };

    const handleOnClick = (taskStatus) => {
        api
            .patch(`/tareas/${id}.json`, {
                status: taskStatus,
            })
            .then((response) => {
                setTaskStatus(response.data.status);
            });
    };

    return (
        <Col>
            <div className={`card text-dark  ${getCardColor()}  shadow-sm`}>
                <div className="card-body">
                    <Row>
                        <Col>
                            <Card.Title className="card-header d-flex align-items-center">
                                <h4>{title}</h4>
                                <div className="d-flex ms-auto custom-botton ">
                                    <Button className="btn-search shadow-sm" title="Pending" id="pending" onClick={() => handleOnClick("pending")} />
                                    <Button className="btn-success shadow-sm" title="Done" id="Done" onClick={() => handleOnClick("success")} />
                                    <Button className="btn-danger shadow-sm" title="Cancel" id="cancel" onClick={() => handleOnClick("canceled")} />
                                </div>
                            </Card.Title>
                        </Col>
                        <Row>
                            <Col>
                                <h5 className="card-subtitle">{assigned}</h5>
                                <Card.Text>{description}</Card.Text>
                                <h6>{date}</h6>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </div>
        </Col>
    );
};

export { CardTask };