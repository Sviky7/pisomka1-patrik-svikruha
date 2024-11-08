'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { Typography, CircularProgress, Box } from '@mui/material'

export default function SignOut() {
  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Signing out...
      </Typography>
    </Box>
  )
}