import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import './AddMasks.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


const AddMasks = () => {

    const [openAddMasks, setOpenAddMasks] = useState('block');

    const closeAddMasks = () => {
        setOpenAddMasks('none');
    };

    const myDrawerStyle = {
        width: 220,
        height: '100%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openAddMasks
    }

    const myIconStyle = {
        cursor: 'pointer',
        width: '20px',
        height: "20px",
        color: '#646d86',
        "&:hover": {
            color: "#ffffff"
        }
    }

    const myBoxStyle = {
        position: 'relative'
    }

    const mySliderStyle = {
        position: 'absolute', 
        top: '40px', 
        right: '20px', 
        width: '80%', 
        margin: 'auto'
    }

    const [blend, setBlend] = useState('screen');

    const [mask, setMask] = useState('');

    const [opacityVal, setOpacityVal] = useState(100);

    const [hueVal, setHueVal] = useState(0);

    const [maskFlipVal, setMaskFlipVal] = useState('');

    const handleBlendChange = (event) => {
        setBlend(event.target.value);
    };

    const handleMaskChange = (event) => {
        setMask(event.target.value);
    };

    const handleMaskFlipChange = (event) => {
        setMaskFlipVal(event.target.value);
    };

  return (
    <Box
        sx={myDrawerStyle}
    >
        <DrawerHeader>
          <IconButton onClick={closeAddMasks} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box>
            <h5>Appearance types</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" style={{fontSize: '0.8rem', color: '#646d86', fontWeight: '600'}}>Blend</InputLabel>
                <Select
                    sx={{fontSize: '0.8rem', fontWeight: '600', color: '#ffffff'}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={blend}
                    label="Blend"
                    onChange={handleBlendChange}
                >
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'normal'}>normal</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'screen'}>screen</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'overlay'}>overlay</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'multiply'}>multiply</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'darken'}>darken</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'darken'}>lighten</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'darken'}>add</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box>
            <h5>Mask types</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" style={{fontSize: '0.8rem', color: '#646d86', fontWeight: '600'}}>Mask</InputLabel>
                <Select
                    sx={{fontSize: '0.8rem', fontWeight: '600', color: '#ffffff'}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={mask}
                    label="Mask"
                    onChange={handleMaskChange}
                >
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'lace1'}>lace1</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'lace2'}>lace2</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'lace3'}>lace3</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'lace4'}>lace4</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'shdw2'}>shdw2</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'shdw17'}>shdw17</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'rpl3'}>rpl3</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'rpl5'}>rpl5</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'prsm3'}>prsm3</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'prsm9'}>prsm9</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'prsm10'}>prsm10</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Opacity</h5>
                <h5>{opacityVal}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={0}
                max={100}
                size="small"
                value={opacityVal}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setOpacityVal(newValue)}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Hue</h5>
                <h5>{hueVal}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-180}
                max={180}
                size="small"
                value={hueVal}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setHueVal(newValue)}}
            />
        </Box>

        <Box>
            <h5>Mask flip options</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" style={{fontSize: '0.8rem', color: '#646d86', fontWeight: '600'}}>Mask flip</InputLabel>
                <Select
                    sx={{fontSize: '0.8rem', fontWeight: '600', color: '#ffffff'}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={maskFlipVal}
                    label="Mask flip"
                    onChange={handleMaskFlipChange}
                >
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'left'}>left</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'right'}>right</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'mirror horizontal'}>mirror horizontal</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'mirror vertical'}>mirror vertical</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'turnaround'}>turnaround</MenuItem>
                </Select>
            </FormControl>
        </Box>

    </Box>
  )
}


export default AddMasks;