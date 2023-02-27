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


function Carusel() {

    const [counter, setCounter] = React.useState(26);

    // console.log (counter);
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        async function create() {
            let { data } = await axios.get(`/now_playing?api_key=c2847ee5ae5ffca9842280e6f3078881&language=en-US&page=${counter}`)
            setData(data.results)
        }
        create()
    }, []);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
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
        <>
            <div className="flex">
                <Box sx={{ width: 600 }}>
                    <div className="flex overflow-hidden">
                        <div className="about__right-inner ">
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {data.map((step, index) => (
                                    <div className='w-100' key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 700,
                                                    display: 'block',
                                                    width: 800,
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={`https://image.tmdb.org/t/p/w500${step.poster_path}`}
                                                alt=""
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                sx={{
                                    bgcolor: 'inherit',
                                }}
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        sx={{
                                            color: '#fff',
                                        }}
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{
                                        color: '#fff',
                                    }}>

                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back

                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </Box>
                <Box sx={{ width: 800, flexGrow: 1 }}>
                    <div className="overflow-hidden">
                        <div className="about__right-inner ">
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {data.map((step, index) => (
                                    <div className='overflow-hidden' key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <>
                                                <h1
                                                    className='about__banner-text text-8xl py-4 mb-4 text-white  overflow-hidden'>
                                                    {step.title}
                                                </h1>
                                                <p
                                                    className='about__banner-text text-2xl mb-16 text-gray-600  overflow-hidden'>
                                                    {step.overview}
                                                </p>
                                                <span
                                                    className='about__banner-text mb-12 block text-2xl text-white overflow-hidden'
                                                >
                                                    <i className="mr-2 fa-solid fa-star text-yellow-400"></i>
                                                    <i className="mr-2 fa-solid fa-star text-yellow-400"></i>
                                                    <i className="mr-2 fa-solid fa-star text-yellow-400"></i>
                                                    <i className="mr-2 fa-solid fa-star text-yellow-400"></i>
                                                    <i className="mr-4 fa-solid fa-star text-yellow-400"></i>
                                                    {step.vote_average}
                                                </span>
                                                <span
                                                    className='about__banner-text block text-2xl text-white overflow-hidden'
                                                >
                                                    <i className="fa-solid fa-play mr-2 text__color"></i>
                                                    <span className='mr-4'>Play</span>
                                                    {step.vote_count}
                                                </span>
                                                <div className="flex justify-between">
                                                    <span
                                                        className='about__banner-text text-2xl text-white overflow-hidden'
                                                    >
                                                        <i className="fa-solid fa-calendar-days mt-4 text__color"></i>
                                                        {step.release_date}
                                                    </span>
                                                    <span
                                                        className='mt-3 about__banner-text text-2xl text-white overflow-hidden'
                                                    >
                                                        <i className="fa-solid text__color mr-2 fa-chart-pie"></i>
                                                        <span className='text__color font-bold mr-3 tracking-widest text-3xl'>Popularity</span>
                                                        {step.popularity}
                                                    </span>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                        </div>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default Carusel;

{/* <div className="about__left-inner">
    <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
    >
        {data.map((step, index) => (
            <div className='overflow-hidden' key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                    <h1
                        className='about__banner-text text-6xl text-white  overflow-hidden'>
                        {step.title}
                    </h1>
                ) : null}
            </div>
        ))}
    </AutoPlaySwipeableViews>
</div> */}