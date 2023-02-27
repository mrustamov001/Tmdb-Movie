import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from 'axios';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CaruselPopular() {

    // const [counter, setCounter] = React.useState(7);

    const [data, setData] = React.useState([])
    React.useEffect(() => {
        async function create() {
            let { data } = await axios.get(`/popular?api_key=c2847ee5ae5ffca9842280e6f3078881&language=en-US&page=${1}`)
            setData(data.results)
        }
        create()
    }, []);
    console.log(data);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(3);
    // setCounter(activeStep === 19 ? counter + 1 : 1)
    const maxSteps = data.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (

        <div>
            <Box sx={{ width: 1200 }}>
                <div className="flex overflow-visible">
                    <div >
                        <h1>Hello</h1>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {data.map((step, index) => (
                                <div key={index}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <div >
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 350,
                                                    // display: 'block',
                                                    width: 200,
                                                    // overflow: 'auto',
                                                    // width: '100%',
                                                }}
                                                src={`https://image.tmdb.org/t/p/w500${step.poster_path}`}
                                                alt=""
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default CaruselPopular;

