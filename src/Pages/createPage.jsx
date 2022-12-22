import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Upload from '../Components/Upload/Upload';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';



export const Create = () => {
  return (
    <React.Fragment>
        <CssBaseline />
        <Box className="myMainPalette">
            <Box className="myActionsMenu">
                <Actions />
            </Box>
            <Box className="myPaletteBox">
                <PaletteHeader />
                <Box className="myPaletteMain">
                    <Upload />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}