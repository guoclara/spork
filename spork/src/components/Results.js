import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RedoIcon from '@mui/icons-material/Redo';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Results(props) {
    const [value, setValue] = React.useState();
    return (
        <Box>
            <Stack spacing={2}>
                <Typography variant="h2" component="div">
                    Theme: {props.theme}
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Typography variant="h2" component="div">
                Day: {props.day}
                </Typography>
            </Stack>
            <BottomNavigation
            sx={{ position: 'fixed', bottom: 30, left: 0, right: 0, backgroundColor: "rgb(247, 225, 241)" }}
            className="nav"
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                if (newValue === 0) {
                    props.generate()
                } else if (newValue === 1) {
                    props.setShowResults(false)
                } else {
                    props.setDate(props.getUpcomingDate(0), () => props.setShowResults(false))
                }
            }}
            >
            {/* <BottomNavigationAction label="Generate Again" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Go Back" icon={<FavoriteIcon />} /> */}
            <BottomNavigationAction label="Generate Again" icon={<RedoIcon />} />
            <BottomNavigationAction label="Go Back" icon={<ExitToAppIcon />} />
            <BottomNavigationAction label="Reset" icon={<RestartAltIcon />} />
            </BottomNavigation>
        </Box>
    );
}