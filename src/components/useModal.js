import React, { useState } from 'react'

function useModal() {
    let [showmodal, setshowmodal] = useState(false);


    let hidePopup = () =>
    {
        setTimeout(() =>
        {
            setshowmodal(false)
        },3000) 
    }

    return {hidePopup,setshowmodal,showmodal}
  
}

export  {useModal}
