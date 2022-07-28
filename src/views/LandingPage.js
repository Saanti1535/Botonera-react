import {
  Box,
  Button,
  createTheme,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import { orange } from '@mui/material/colors';
import { flexbox } from '@mui/system';
import {
  CustomButtonHovered,
  LandingBox,
  RootBox,
} from 'components/Containers';
import { StickerImg } from 'components/Images';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { personService } from 'services/personService';
import hereWeGo from './../audios/here-we-go.mp3';
import malaLeche from './../audios/mala-leche.mp3';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const NoEntrarModal = ({ open, handleClose, handleClick, audio }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          AH NOOOOOOOO
        </Typography>
        <Typography id="modal-modal-description" sx={{ my: 2 }}>
          Mirá que gato que sos gil, entrá dale. Dejate de joder
        </Typography>
        <Button
          sx={{ p: 2 }}
          variant="contained"
          onClick={() => handleClick(audio)}
        >
          ENTRAR
        </Button>
      </Box>
    </Modal>
  );
};

export const LandingPage = () => {
  let navigate = useNavigate();
  const goAudio = new Audio(hereWeGo);
  const malaLecheAudio = new Audio(malaLeche);
  const [open, setOpen] = useState(false);
  const [persons, setPersons] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  goAudio.onended = () => {
    navigate('/botonera');
  };
  malaLecheAudio.onended = () => {
    handleOpen();
  };

  const handleClick = (audio) => {
    audio.play();
  };

  const goToBotonera = (namePerson) => {
    navigate(`botonera/${namePerson}`);
  };

  useEffect(() => {
    const fetchPersons = () => {
      const persons = personService.getAll();
      setPersons(persons);
    };

    fetchPersons();
  });

  return (
    <RootBox>
      <LandingBox>
        <h2 style={{ marginBottom: 5, textTransform: 'uppercase' }}>
          Elegí una botonera
        </h2>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          sx={{ flexGrow: 1 }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              boxSizing: 'unset',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-around',
              padding: '5px',
            }}
          >
            {persons.map((person) => (
              <Grid item xs={6} md={4} key={person.id}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h4 style={{ marginBottom: 3 }}>{person.name}</h4>
                  <div style={{ display: 'block' }}>
                    <CustomButtonHovered
                      onClick={() => goToBotonera(person.name)}
                    >
                      <StickerImg alt="sticker" src={person.img} />
                    </CustomButtonHovered>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </LandingBox>
    </RootBox>
  );
};
