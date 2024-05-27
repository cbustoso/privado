'use client'
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularLoading() {
  CircularLoading
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* <CircularProgress variant="determinate" {...props} /> */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" sx={{fontSize: '100px'}}>
         <h1>HOLOOOO</h1>
        </Typography>
      </Box>
    </Box>
  );
}


export default function Loading() {
/*   const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []); */

  return <div><h1>HOLOOOOO</h1></div> ;
}