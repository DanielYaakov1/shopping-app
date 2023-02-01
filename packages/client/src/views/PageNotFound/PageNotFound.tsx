import React, { memo } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import image from '../../assets/images/error_640.jpg';
import { useHistory } from 'react-router-dom';
import RESOURCES from '../../resources';

const PageNotFound = memo(() => {
  const history = useHistory();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">{RESOURCES.PAGE_NOT_FOUND_CODE_TEXT}</Typography>
            <Typography variant="h6"> {RESOURCES.PAGE_NOT_FOUND}</Typography>
            <Button
              variant="contained"
              onClick={() => {
                history.replace('/');
              }}>
              {RESOURCES.BACK_HOME}
            </Button>
          </Grid>
          <Grid xs={6}>
            <img src={image} alt="error" width={500} height={250} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default PageNotFound;
