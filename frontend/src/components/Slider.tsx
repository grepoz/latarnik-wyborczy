import { useEffect, useState } from "react";
import {Statement} from "../models/Statement";
import {Carousel} from "react-bootstrap";
import StatementComponent from "./StatementComponent";
import '../styles/Carousel.css';

const Slider = () => {

    const [statements, setStatements] = useState<Statement[]>([]);

    useEffect(() => {
        const fetchStatements = async () => {
            try {
                // const response = await fetch('http://localhost:3000/questions');
                // const statements = await response.json();
                // setStatements(statements || []);

                const exampleStatements: Statement[] = [
                    {
                        id: 1,
                        statementContent: "The Earth revolves around the Sun.",
                        description: "This is a basic astronomical fact.",
                    },
                    {
                        id: 2,
                        statementContent: "Water boils at 100 degrees Celsius.",
                        description: "A common knowledge in physics and chemistry.",
                    },
                    {
                        id: 3,
                        statementContent: "The capital of France is Paris.",
                        description: "A widely known fact in geography.",
                    }
                ];

                setStatements(exampleStatements);

            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchStatements().then();
    }, []);

    const handleSelectionChange = (statementId: number, selectedAnswer: string) => {
        console.log(`Statement ${statementId} selected answer: ${selectedAnswer}`);
    }

    return (
        <Carousel interval={null} style={{ maxWidth: "70%" }}>
            {statements.map((statement, index) => (
                <Carousel.Item key={index} className={'carousel-item'}>

                    <div className={'carousel-item-content'} style={{ textAlign: "center" }}>
                        <h1>{`Stwierdzenie ${index + 1}`}</h1>
                        <StatementComponent
                            statement={statement}
                            onSelectionChange={handleSelectionChange}
                        />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Slider;
