import { AppBar, Stack, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { NavLink } from 'react-router-dom';
function ProductsHeader() {
  return (
    <>
    <AppBar component='section' position='static' sx={{py:1}} className={`bg_color_secondary`}>
<Container>
    <Stack direction='row' justifyContent="space-between" spacing={2}>
        
            <NavLink to='/ecommerce' exact className={`text-center`}>
            <DevicesOtherIcon  />
            <Typography align='center'>Electronics</Typography>
            </NavLink>
       
       
        <NavLink to='/appliances' exact className={`text-center`}>
            <MicrowaveIcon  />
            <Typography align='center'>Kitchen Appliances</Typography>
            </NavLink>
       
            <NavLink to='/tools' exact className={`text-center`}>
            <PrecisionManufacturingIcon  />
            <Typography align='center'>Tools</Typography>
            </NavLink>
            <NavLink to='/fitness' exact className={`text-center`}>
            <FitnessCenterIcon  />
            <Typography align='center'>Fitness test</Typography>
            </NavLink>
    </Stack>
</Container>
    </AppBar>
    </>
  )
}

export default ProductsHeader