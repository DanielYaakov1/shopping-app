import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { settingsList } from '../../utils/constants/navBarData';
import { generateObjectArrayFromStrings } from '../../utils/helpers/array.helpers';

type settingsMenuProps = {
  handleOpenUserMenu: React.MouseEventHandler<HTMLButtonElement> | undefined;
  menuDropDown: string;
  anchorElUser: Element | ((element: Element) => Element) | null | undefined;
  handleCloseUserMenu: (value: number) => void;
};

const SettingsMenu = ({
  handleOpenUserMenu,
  menuDropDown,
  anchorElUser,
  handleCloseUserMenu,
}: settingsMenuProps) => {
  const settingsMenuObjectArrayStrings = generateObjectArrayFromStrings(settingsList);
  return (
    <Box
      sx={{
        flexGrow: 0,
      }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
          }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        className={menuDropDown}
        sx={{
          mt: '45px',
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        {settingsMenuObjectArrayStrings.map((setting) => (
          <MenuItem key={setting.key} onClick={() => handleCloseUserMenu(setting.key)}>
            <Typography textAlign="center">{setting.value}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SettingsMenu;
