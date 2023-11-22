import * as React from 'react';
import { useState } from 'react';
import { useCountdown } from './Countdown';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CountdownTimer from './CountdownTimer';
import Results from './Results';
import ConfettiExplosion from 'react-confetti-explosion';

const largeProps: ConfettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
  };

export default function Scheduler(props) {
    const time = useCountdown(props.targetDate);
    const timeUntil = time.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const [showResults, setShowResults] = useState(false);
    const [theme, setTheme] = useState("");
    const [day, setDay] = useState(0);

    function generate() {
        setTheme(props.themes[Math.floor(Math.random() * props.themes.length)]);
        // use ceil to decrease likelihood of zero
        setDay(Math.ceil(Math.random() * props.days));
    }

    function generateOnPress() {
        setShowResults(!showResults)
        generate()
    }
      
    if (timeUntil <= 0) {
        if (showResults) {
            return (
                <Box>
                <Results 
                    theme={theme} 
                    day={day} 
                    generate={generate} 
                    setShowResults={setShowResults}
                    getNextDate={props.getNextDate}
                    getUpcomingDate={props.getUpcomingDate}
                    setDate={props.setDate}
                />
                {/* <ConfettiExplosion /> */}
                </Box>
            );
        }
        return (
            <Box sx={{alignItems:"center"}}>
                <CountdownTimer time={[0, 0, 0, 0]}/>
                <Button variant="contained" onClick={() => generateOnPress()}>
                    Generate Spork Day and Theme
                </Button>
            </Box>
        );
    } else {
        return (
            <Box>
                <CountdownTimer time={time}/>
                <Typography variant="h2" component="div">
                        Until Spork Day!
                </Typography>
            </Box>
        );
    }
}