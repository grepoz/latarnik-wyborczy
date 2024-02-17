import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Statement} from "../models/Statement";

type StatementComponentProps = {
    statement: Statement;
    onSelectionChange: (statementId: number, selectedAnswer: string) => void;
}

const StatementComponent: React.FC<StatementComponentProps> = ({statement, onSelectionChange }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const answers = ["Zgadzam się", "Nie zgadzam się", "Nie mam zdania"];

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const answer = event.target.value;
        setSelectedAnswer(answer);
        onSelectionChange(statement.id, answer);
    };

    return (
        <>
            <Form.Group className={"form-group"}>
                <Form.Label>{statement.statementContent}</Form.Label>

                {
                    answers.map((answer, index) => (
                        <div key={index} className="mb-3">
                            <Form.Check
                                type="radio"
                                id={`radio-${statement.id}-${index}`}
                                label={answer}
                                value={answer}
                                checked={selectedAnswer === answer}
                                onChange={handleRadioChange}
                            />
                        </div>
                    ))
                }

                <Form.Control.Feedback type='invalid'>
                    Wybierz najbardziej pasujące do Ciebie określenie.
                </Form.Control.Feedback>
            </Form.Group>
        </>
    );
}

export default StatementComponent;