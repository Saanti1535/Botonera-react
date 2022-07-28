const { styled } = require('@mui/material');

export const StickerImg = styled('img')(({ theme }) => ({
  margin: 'auto',
  display: 'block',
  // maxWidth: '100%',
  maxHeight: '100%',
  [theme.breakpoints.down(500)]: {
    maxWidth: '75%',
    maxHeight: '75%',
  },
}));
