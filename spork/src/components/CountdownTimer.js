import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TimeCard from './TimeCard'

export default function CountdownTimer(props) {
    const [days, hours, minutes, seconds] = props.time;
    return (
        <Box sx={{ flexGrow: 1, maxWidth: '80vw' }}>
            <Grid container spacing={2} sx={{ paddingBottom: '30px' }}>
                <Grid item xs={3}>
                    <TimeCard title="days" value={days} />
                </Grid>
                <Grid item xs={3}>
                    <TimeCard title="hours" value={hours} />
                </Grid>
                <Grid item xs={3}>
                    <TimeCard title="minutes" value={minutes} />
                </Grid>
                <Grid item xs={3}>
                    <TimeCard title="seconds" value={seconds} />
                </Grid>
            </Grid>
        </Box>
    );
}