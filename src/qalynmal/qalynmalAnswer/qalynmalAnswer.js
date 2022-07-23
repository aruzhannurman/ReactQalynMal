import React from 'react';
import { useState } from 'react';
 import '../qalynmalAnswer/qalynmalAnswer.css';
import {Link} from 'react-router-dom';

import { useContext } from 'react';
import { SumContext } from '../../Context';

export const QalynmalAnswer = () => {
  const {sum} = useContext(SumContext);
  
  return (
    <div>
      {sum}
      
    </div>
  )
}


