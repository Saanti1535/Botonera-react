import { Box, Button, Grid, styled } from '@mui/material';
import {
  BotoneraBox,
  CustomButtonHovered,
  LandingBox,
  RootBox,
} from 'components/Containers';
import { StickerImg } from 'components/Images';
import { Person } from 'domain/person';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { personService } from 'services/personService';
import audioMario from 'audios/mario-coin.mp3';

export const Botonera = () => {
  const [person, setPerson] = useState(new Person());
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerson = () => {
      const person = personService.getByName(params.name);
      setPerson(person);
    };

    fetchPerson();
  }, [person]);

  const handleClick = () => {
    navigate('/');
  };

  const playAudio = (audio) => {
    audio.play();
  };

  return (
    <RootBox>
      <BotoneraBox>
        <h3 style={{ textTransform: 'uppercase' }}>
          BOTONERA DE {person.name}
        </h3>
        <Box
          // p={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          sx={{ flexGrow: 1 }}
        >
          <Grid
            container
            columns={{ xs: 2, sm: 4, md: 12 }}
            spacing={2}
            sx={{
              boxSizing: 'unset',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-around',
              padding: '5px',
            }}
          >
            {person.audios.map((audio, index) => (
              <Grid item xs={1} sm={2} md={4} key={index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h4 style={{ marginBottom: 3 }}>{index}</h4>
                  <CustomButtonHovered onClick={() => playAudio(audio)}>
                    <StickerImg alt="complex" src={person.img} />
                  </CustomButtonHovered>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div style={{ padding: 10, marginTop: 25 }}>
          <Button variant="contained" onClick={handleClick}>
            Volver atrás
          </Button>
        </div>
      </BotoneraBox>
    </RootBox>
  );
};
