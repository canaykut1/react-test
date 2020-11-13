import React from "react";
import TextBox from "devextreme-react/text-box";

export default function LanguageField(data) {
  return (
    <div className='custom-item'>
      <img
        src={data && data.imageSrc}
        style={{
          height: "30px",
          width: "30px",
          display: "inline-block",
        }}
      />
      <TextBox
        className='product-name'
        style={{ display: "inline-block" }}
        defaultValue={data && data.name}
        readOnly={true}
      />
    </div>
  );
}
