'use client'

import { signIn } from 'next-auth/react'
import { Button, Paper, Typography, Box } from '@mui/material'


export default function SignIn() {
  return (
    <Paper sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <Button
          variant="contained"
          onClick={() => signIn('google', { callbackUrl: '/' })}
          sx={{ mt: 2 }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Paper>
  )
}