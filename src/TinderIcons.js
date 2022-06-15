import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import './TinderIcons.css';
import { IconButton } from '@mui/material';

export default function TinderIcons() {
  return (
        <div className='tinderIcons'>
            <IconButton>
                <ReplayIcon className='tinderIcons__icon repeat' fontSize='large' />
            </IconButton>
            <IconButton>
                <CloseIcon className='tinderIcons__icon left' fontSize='large' />
            </IconButton>
            <IconButton>
                <StarIcon className='tinderIcons__icon super' fontSize='large' />
            </IconButton>
            <IconButton>
                <FavoriteIcon className='tinderIcons__icon like' fontSize='large' />    
            </IconButton>
            <IconButton>
                <ElectricBoltIcon className='tinderIcons__icon boost' fontSize='large' />                
            </IconButton>
        </div>
  )
}
