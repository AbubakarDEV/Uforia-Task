import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToastList from './components/ToastList';
import LikedList from './components/LikedList';
import { useToastManager } from './custom-hook/useToastManager';

export default function Content() {
  const { toasts, liked, likeToast, dismissToast } = useToastManager();

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      <ToastList toasts={toasts} onLike={likeToast} onDismiss={dismissToast} />
      <LikedList liked={liked} />
    </Box>
  );
}
