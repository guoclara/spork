import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TimeCard(props) {
  return (
    <Card sx={{ width: 250, display: 'flex', justifyContent: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="h1">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}