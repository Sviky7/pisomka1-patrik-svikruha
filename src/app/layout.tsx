'use client'

import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { SessionProvider, useSession } from 'next-auth/react'
import { Menu, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'

function NavMenu() {
  const { data: session } = useSession()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} href="/">
          Home
        </MenuItem>
        {session ? (
          <MenuItem onClick={handleClose} component={Link} href="/signout">
            Sign Out
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose} component={Link} href="/signin">
            Sign In
          </MenuItem>
        )}
      </Menu>
    </div>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4 }}>
        {children}
      </Container>
    </Box>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <RootLayoutInner>{children}</RootLayoutInner>
        </SessionProvider>
      </body>
    </html>
  )
}
