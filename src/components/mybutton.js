import React from 'react';

function MyButton (props){
        return(
            <button  onClick={()=> {window.location="https://www.facebook.com/"}} style={{height:53}} >click me</button>
            );
}

export default MyButton