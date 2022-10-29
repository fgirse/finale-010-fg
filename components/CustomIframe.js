import React, { useState } from 'react'
export default function Component(props){
    const {source, height, width} = this.props
    return (
        <div>          
       <iframe src={source} height={height} width={width}/>         
     </div>
    ) 
 }  