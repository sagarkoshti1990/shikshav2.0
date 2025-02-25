import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
interface ActionIcon {
  icon: React.ReactNode;
  ariaLabel: string;
  anchorEl?: HTMLElement | null;
  onLogoutClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onOptionClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLLIElement, MouseEvent>
  ) => void;
}
interface ProfileIcon {
  icon: React.ReactNode;
  ariaLabel: string;
  anchorEl?: HTMLElement | null;
  onLogoutClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
interface CommonAppBarProps {
  title?: string;
  showMenuIcon?: boolean;
  showBackIcon?: boolean;
  menuIconClick?: () => void;
  backIconClick?: () => void;
  actionButtonColor?: 'inherit' | 'primary' | 'secondary' | 'default';
  color?: 'primary' | 'secondary' | 'default' | 'transparent' | 'inherit';
  actionIcons?: ActionIcon[];
  profileIcon?: ProfileIcon[];
  bgcolor?: string;
  onMenuClose?: () => void;
  logoUrl?: string;
}

export const TopAppBar: React.FC<CommonAppBarProps> = ({
  title = 'Title',
  showMenuIcon = true,
  showBackIcon = false,
  menuIconClick,
  backIconClick,
  actionButtonColor = 'inherit',
  color = 'transparent',
  actionIcons = [],
  profileIcon = [],
  bgcolor = '#FDF7FF',
  onMenuClose,
  logoUrl,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        color={color}
        sx={{
          boxShadow: 'none',
          bgcolor,
        }}
      >
        <Toolbar>
          {showMenuIcon && (
            <>
              {logoUrl && (
                <Image src={logoUrl} alt="logo" width={50} height={50} />
              )}
              <Typography
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                  fontSize: '22px',
                  fontWeight: 400,
                }}
              >
                {title}
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={menuIconClick}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}
          {showBackIcon && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={backIconClick}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left' }}
              >
                {title}
              </Typography>
            </>
          )}
          {profileIcon && profileIcon.length > 0 && (
            <IconButton
              color={actionButtonColor}
              aria-label={profileIcon[0]?.ariaLabel}
              onClick={profileIcon[0]?.onLogoutClick}
            >
              {profileIcon[0].icon}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {profileIcon[0]?.anchorEl && (
        <Menu
          id="menu-appbar"
          anchorEl={profileIcon[0].anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(profileIcon[0].anchorEl)}
          onClose={onMenuClose}
        >
          {actionIcons?.map((action, index) => (
            <MenuItem key={index} onClick={action?.onOptionClick}>
              <IconButton size="small" color="inherit">
                {action.icon}
              </IconButton>
              {action.ariaLabel}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
};
