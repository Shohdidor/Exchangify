import React, { useEffect } from 'react'
import Model1 from "/src/image/pngwing.com (20).png"
import "./Home.css"
// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';


// MUI 

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';



import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Category } from '@mui/icons-material';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <div className='flex justify-between mt-[-170px]'>
      <div className='p-[50px] bg-[#66666E]'>
        <h1 data-aos="fade-right" className='text-[100px] poppins mt-[140px] text-[#F39C12]'>
      Exchangify 
        </h1>
        <p data-aos="fade-down" className='text-[100px] mt-[-200px] ml-[550px] text-[#F39C12]'>
          ○
        </p>

      
        <p className='text-[#0A1128] pl-[5px] mt-[50px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veritatis, nostrum, neque sunt quia atque corporis obcaecati aliquid, fugit eius omnis aliquam placeat voluptates alias tempore! Ex aliquid numquam facere?
      </p>

      <div className='flex justify-end'>
        <button onClick={handleClickOpen} className='bg-[#F39C12] active:brightness-125 active:translate-y-[3px] p-[5px] text-[17px] rounded-[3px] text-[#0A1128] poppins px-[20px] border-[#ffffff76] duration-100 ease-in-out border-[1px]'>
          Read More
        </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} className='bg-[#1a1a1ae9]' id="customized-dialog-title">
          <h1 className='poppins text-[white]'>
        Exchangify
          </h1>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className='bg-[#66666E] text-[black]'>
          <Typography gutterBottom>
          Is a platform that allows users to exchange unwanted items easily.
          Users can post items they want to trade and explore offers from others.
          </Typography>
          <hr className='border-[white]'/>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
          The goal is to promote sustainability through reuse by helping people find new homes for things they no longer need.
          It's simple, eco-friendly, and encourages a sharing economy.
          </Typography>
        </DialogContent>
        <DialogActions className='bg-[#1A1A1A]'>
        <button onClick={handleClose} className='bg-[#F39C12] active:brightness-125 active:translate-y-[3px] p-[5px] text-[17px] rounded-[3px] text-[#0A1128] poppins px-[20px] border-[#ffffff76] duration-100 ease-in-out border-[1px]'>
          Continue
        </button>
        </DialogActions>
      </BootstrapDialog>
      </div>
      </div>
      <div>
        <img src={Model1} alt="Model1" />
      </div>
    </div>

    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>
    </>
  )
}

export default Home


