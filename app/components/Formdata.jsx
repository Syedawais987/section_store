import {FormLayout, TextField} from '@shopify/polaris';
import React, { useState } from 'react';

export default function  Formdata() {
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")

  return (
    <FormLayout>
      <TextField 
      label="Title" 
      onChange={(value) => settitle(value)}
       autoComplete="off" value={title} />
      <TextField
        type="text"
        label="Description"
        onChange={(value) => setdescription(value)}
        autoComplete="off" value={description}
      />
    </FormLayout>
  );
}