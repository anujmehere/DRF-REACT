import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Mailto from 'reactv16-mailto';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import PhoneNumber from 'react-phone-number';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },

  root: {
    maxWidth: 'auto',
    flexGrow: 1,
  },
  header: {
   
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img1: {
    height: 400,
    maxWidth: 'auto',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },


  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },


}));

export default function Post() {
  const { slug } = useParams();
  const classes = useStyles();
  const [data, setData] = useState({
    posts: [],
  });

  useEffect(() => {
    axiosInstance.get('post/' + slug).then((res) => {
      setData({
        posts: res.data,
      });
      console.log(res.data);
    });
  }, [setData]);

  ////

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    

    <Container component="main" maxWidth="auto">
      <CssBaseline />
      
      {/* <div className={classes.paper}> </div>{' '} */}
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          {/* <Typography>{data.posts.title}</Typography> */}
          <centre><h1>{data.posts.title}</h1></centre>
		  
        </Paper>
        <img



          className={classes.img1}
          src={tutorialSteps[activeStep].imgPath}
          //src={data.posts.image}
          alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
          }
        />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <Grid container spacing={2}>
              <Grid item>
				  
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Remdisvir
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Manufacturer
                </Typography>
                    <Typography variant="body2" >
                      ID: 1030114
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
				
				
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Quantity</Typography>
                  <Typography variant="subtitle1">{data.posts.rem}</Typography>
				  
                </Grid>
				
              </Grid>
			  
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Oxygen
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Liquified Oxygen
                </Typography>
                    <Typography variant="body2" >
                      ID: 1030114
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Qunatity</Typography>
                  <Typography variant="subtitle1">{data.posts.oxy}</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="error.main" color="error.contrastText" p={2}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Total ICU Beds
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Liquified Oxygen
                </Typography>
                    <Typography variant="body2" >
                      ID: 1030114
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Count</Typography>
                  <Typography variant="subtitle1">{data.posts.t_icu_bed}</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Available ICU Beds
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Liquified Oxygen
                </Typography>
                    <Typography variant="body2" >
                      ID: 1030114
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Count</Typography>
                  <Typography variant="subtitle1">{data.posts.a_icu_bed}</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Total Oxygen Beds
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Liquified Oxygen
                </Typography>
                    <Typography variant="body2" >
                      ID: 1030114
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Count</Typography>
                  <Typography variant="subtitle1">{data.posts.t_oxy_bed}</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Available Oxygen Beds
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Liquified Oxygen
                </Typography>
                    <Typography variant="body2" >
                      ID: 1030114
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Count</Typography>
                  <Typography variant="subtitle1">{data.posts.a_oxy_bed}</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>

            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Contact Us
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Manager
                </Typography>
                    <Typography variant="body2" >
                    
                    
                    <PhoneNumber number={data.posts.phone} isLinked={true} color="white"/>
                    {/*   {data.posts.phone} */}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>

            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Email Access
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Manager
                </Typography>
                    <Typography variant="body2" >
                    <Mailto email={data.posts.email} obfuscate={true} >
                    {data.posts.email}
                    </Mailto >
                      {/* {data.posts.email} */}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box bgcolor="warning.main" color="info.contrastText" p={2}>

            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={data.posts.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Doctor: {data.posts.doc}
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      
                </Typography>
                    <Typography variant="body2" >
						
					   {data.posts.qual}<br></br>
             <PhoneNumber number={data.posts.doc_phone} isLinked={true} /><br></br>
					   {/* {data.posts.doc_phone}<br></br> */}
					   {data.posts.doc_add}
                </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Share
                </Typography>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Box>
		  
        </Grid>
      <screenRight>Last Updated At: {data.posts.update_time}</screenRight>
	  
      </Grid>




    </Container>

  );
}


const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];