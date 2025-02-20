import { Avatar, Button } from '@mui/material';
import React from 'react'
import './css/QuoraBox.css';
import { EditNote, PostAdd, Quiz } from '@mui/icons-material';

function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox-info'>
            <Avatar />
            <input type='text' placeholder='What do you want to ask or share ?'/></div>

          <div className='quora-btns'>
      <div className='quoraBox-quora'>
        <Button>
          <Quiz /><p>Ask </p>
        </Button>
      </div>
      <div className='quoraBox-quora'>
        <Button>
          <EditNote /><p>Answer</p>
        </Button>
      </div>
      <div className='quoraBox-quora'>
        <Button>
          <PostAdd /><p>Post</p>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default QuoraBox;

