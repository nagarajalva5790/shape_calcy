import React from 'react';
import { Card } from 'reactstrap';
import CalculateShape from './CalculateShape';

//styles
import { Wrapper } from '../App.styles';

type Props = {
    stepNum: number;
    callback1: (e: React.MouseEvent<HTMLButtonElement>) => void;
    callCancel: (e: React.MouseEvent<HTMLAnchorElement>) => void;

};

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
                    <Wrapper>
                        <Card className='CardContainer'>
                            <CalculateShape stepNum={stepNum} callback1={callback1} callCancel={callCancel} />
                        </Card>
                    </Wrapper>
                </div>

            </div>
        </div>
    );

export default ShapeCard;

