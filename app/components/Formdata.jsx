import { Button, FormLayout, TextField } from '@shopify/polaris';
import React, { useState } from 'react';

export default function Formdata() { 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Form submitted"); 

        try {
            const formData = new FormData(); 
            formData.append("title", title);
            formData.append("description", description);

            const res = await fetch("/app.additional", { 
                method: "POST",
                body: formData
            });

            console.log(res); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormLayout onSubmit={handleSubmit}>
            <TextField
                label="Title"
                onChange={(value) => setTitle(value)}
                autoComplete="off"
                value={title}
            />
            <TextField
                type="text"
                label="Description"
                onChange={(value) => setDescription(value)}
                autoComplete="off"
                value={description}
            />
            <Button submit>Submit</Button> {/* Use submit type for form submission */}
        </FormLayout>
    );
}
