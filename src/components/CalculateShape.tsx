import React, { useState } from 'react';

//styles
import { Wrapper } from '../App.styles';

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
    const [shape, setShape] = useState('');
    const [result, setResult] = useState(0);

    const selectedShape = (option: string) => {
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
        switch (shape) {
            case 'Rectangle':
                setResult(value1 * value2);
                break;
            case 'Circle':
                setResult(value1 * value1 * 3.14);
                break;
            case 'Square':
                setResult(value1 * value1);
                break;
            case 'Ellipse':
                setResult(value1 * value1);
                break;
            default:
                console.log("None of the condiotion satisified");
        }
    }


    const options = ['Rectangle', 'Circle', 'Square', 'Ellipse'];

    return (

        <div>
            <div>
                {
                    stepNum === 1 ? <p>Step {stepNum}: Select Your Shape<br />Please select the shape that you would like to calculate the area of and press the button "Go to step 2"</p> : null
                }
                {
                    stepNum === 2 ? <p>Step {stepNum}: Insert your values<br />You have selected a {shape}, please input the required variables.</p> : null
                }
                {
                    stepNum === 3 ? <p>Step {stepNum}: Your results<br />You have calculated the area of a {shape} with a diameter of {value1}. Below is your result:</p> : null
                }
            </div>
            <Wrapper>
                {
                    stepNum < 2 ? <div className='labelAlign'>
                        {
                            options.map(option =>
                                <div key={option} ><input type="radio" value={option} name="shape" onChange={e => selectedShape(option)} /> {option}</div>
                            )
                        }
                    </div> : null
                }

                <div className='labelAlign'>
                    {
                        shape && stepNum === 2 ? <div>
                            <label>Value A &emsp;</label>
                            <input type="text" name="value1" onChange={e => handleValue1(e.target.value)} />
                        </div> : null
                    }
                    {
                        (shape === 'Ellipse' || shape === 'Rectangle') && stepNum === 2 ? <div>
                            <label>Value B &emsp;</label>
                            <input type="text" name="value2" onChange={e => handleValue2(e.target.value)} />
                        </div> : null
                    }
                </div>
                {
                    stepNum === 3 ? <div className='labelAlign'>
                        <h3>The area is {result}</h3>
                    </div> : null
                }

                <div className='buttonStyle'>
                    <button value={stepNum} onClick={callback1}>
                        {
                            stepNum > 2 ? <span dangerouslySetInnerHTML={{ __html: 'Start Over' }} /> : <span dangerouslySetInnerHTML={{ __html: `Go to Step ${stepNum + 1}` }} />
                        }
                    </button>
                    <a onClick={callCancel}><span dangerouslySetInnerHTML={{ __html: ' &emsp; or Cancel' }} /></a>
                </div>
            </Wrapper>

        </div>
    );
}

export default CalculateShape;