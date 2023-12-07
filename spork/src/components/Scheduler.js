import * as React from 'react';
import { useState } from 'react';
import { useCountdown } from './Countdown';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CountdownTimer from './CountdownTimer';
import Results from './Results';

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
                <Button variant="contained" onClick={() => generateOnPress()} sx={{ backgroundColor: "rgb(224 118 195)"}}>
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