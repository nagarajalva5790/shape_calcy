import React, { useState } from 'react';
import {
    Card
} from 'reactstrap';

type Props = {
    stepNum: number;
    callback1: (e: React.MouseEvent<HTMLButtonElement>) => void;
    callCancel: (e: React.MouseEvent<HTMLAnchorElement>) => void;

};

const CalculateShape: React.FC<Props> = ({
    stepNum,
    callback1,
    callCancel
}) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [shape, setShape] = useState();
    const [result, setResult] = useState(0);

    const selectedShape = (option: any) => {
        setShape(option);
    }

    const handleValue1 = (val1: string) => {
        setValue1(parseFloat(val1))
        setResult(0);
    }

    const handleValue2 = (val2: string) => {
        setValue2(parseFloat(val2))
        setResult(0);
    }


    if (stepNum === 3 && !result) {
        if (shape === 'Rectangle')
            setResult(value1 * value2);
        else if (shape === 'Circle')
            setResult(value1 * value1 * 3.14);
        else if (shape === 'Square')
            setResult(value1 * value1);
        else
            setResult(value1 * value2 * 3.14);
    }

    const options = ['Rectangle', 'Circle', 'Square', 'Ellipse'];

    return (

        <div>
            <div>

                {stepNum === 1 ? <p>Step {stepNum}: Select Your Shape<br />Please select the shape that you would like to calculate the area of and press the button "Go to step 2"</p> : null}
                {stepNum === 2 ? <p>Step {stepNum}: Insert your values<br />You have selected a {shape}, please input the required variables.</p> : null}
                {stepNum === 3 ? <p>Step {stepNum}: Your results<br />You have calculated the area of a {shape} with a diameter of {value1}. Below is your result:</p> : null}


            </div>
            {stepNum < 2 ? <div style={{ textAlign: "left" }} >
                {
                    options.map(option =>
                        <div key={option} ><input type="radio" value={option} name="shape" onChange={e => selectedShape(option)} /> {option}</div>
                    )
                }
            </div> : null}

            <div style={{ textAlign: "left" }}>
                {shape && stepNum === 2 ? <div>
                    <label>Value A &emsp;</label>
                    <input type="text" name="value1" onChange={e => handleValue1(e.target.value)} />
                </div> : null}
                {(shape === 'Ellipse' || shape === 'Rectangle') && stepNum === 2 ? <div>
                    <label>Value B &emsp;</label>
                    <input type="text" name="value2" onChange={e => handleValue2(e.target.value)} />
                </div> : null}
            </div>
            {
                stepNum === 3 ? <div style={{ textAlign: "left" }}>
                    <h3>The area is {result}</h3>
                </div> : null
            }

            <div style={{ textAlign: "left", padding: "3px", margin: "3px" }}>
                <button value={stepNum} onClick={callback1}>
                    {stepNum > 2 ? <span dangerouslySetInnerHTML={{ __html: 'Start Over' }} /> : <span dangerouslySetInnerHTML={{ __html: `Go to Step ${stepNum + 1}` }} />}
                </button>
                <a onClick={callCancel}><span dangerouslySetInnerHTML={{ __html: ' &emsp; or Cancel' }} /></a>
            </div>

        </div>
    );
}


const ShapeCard: React.FC<Props> = ({
    stepNum,
    callback1,
    callCancel
}) => (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <h3>Welcome to Shape Calculator</h3>
                    <p><b>Shape Calculator is an interactive web application. To the right you will find the 3 step application. Follow the instructions in each step. Clicking cancel will take you back to step 1. Enjoy!</b></p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas.</p>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card style={{ width: "320px", height: "275px" }}>
                        <CalculateShape stepNum={stepNum} callback1={callback1} callCancel={callCancel} />
                    </Card>
                </div>
            </div>
        </div>
    );

export default ShapeCard;

