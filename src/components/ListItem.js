import React from 'react';
import ItemSummary from './itemsummary'
import Wrapper from './itemsummary'
import Title from './itemsummary'
import photo from './container';

function ListItem() {
    const mystyle = {border: 'solid 1 black', maxWidth:`100vw`}
   const st = {color:'red'}
  return (
    <div style={mystyle}>
         <Wrapper>
           <Title/>
          </Wrapper>
    </div>
  );
}

export default ListItem;
