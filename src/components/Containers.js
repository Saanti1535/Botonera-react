import { Box, Button, styled } from '@mui/material';
import backgroundImage from 'images/backgroundImage.jpg';

export const LandingBox = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.50)',
  backgroundColor: '#ffff',
  color: 'black',
  display: 'flex',
  padding: 10,
  paddingBottom: 20,
  flexDirection: 'column',
  alignItems: 'center',
  margin: 30,
  marginTop: 50,
  width: '50%',
  [theme.breakpoints.down('sm')]: {
    width: '75%',
    height: '75%',
  },
}));

export const RootBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
}));

export const BotoneraBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffff',
  borderRadius: '10px',
  boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.50)',
  margin: 30,
  marginTop: 50,
  padding: 12,
  // height: '50%',
  // height: 'auto',
  height: 'fit-content',
  maxHeight: '100%',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '75%',
    height: '75%',
  },
}));

export const CustomButtonHovered = styled(Button)({
  width: 128,
  height: 128,
  transition: 'transform 250ms ease-out',
  '&:hover': {
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    backgroundColor: 'transparent',
  },
});
