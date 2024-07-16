import React from 'react';
import{memo} from "react";

const ChildCallback = ({mul}) => {
    console.log("This is child Callback");
    mul()
  return  <div></div>;
  
};

export default memo(ChildCallback);