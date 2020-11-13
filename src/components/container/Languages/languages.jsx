import React from "react";

export default function Languages(data) {
  return (
    <div className='custom-item'>
      <img style={{ height: "25px", width: "25px", display:"inline-block", marginRight:"15px"}} src={data.imageSrc} />
      <div className='product-name' style={{display:"inline-block"}}>{data.name}</div>
    </div>
  );
}
