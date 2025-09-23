import React from "react";
import { useForm } from "react-hook-form";

function FileUploadForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData(data);
        
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
        formData.append("file", data.file[0]);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        
        if (res.success) {
            console.log("Success", res);
        } else {
        console.log("Error", res);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" />
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
    );
}

export default App;