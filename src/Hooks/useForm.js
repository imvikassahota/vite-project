import { useState } from "react";

const useForm = () => {
    // FORM values
    const[values, setValues] = useState({});
    // Errors
    const[errors, setErrors] = useState({});

    // method to hadle form Inputs
    const handleChange = (event) => {
        //To stop default event
        event.persist();

        const{ name, value, type, checked } = event.target;
        let val = value;

        if(type === "checked"){
            val = checked;
        }

        // validate the data
        validate(event, name, val);

        // set the date in state
        setValues({...values, [name]: val,});
    }

    const validate = (event, name, value) => {

    }

    return{};
}

export default useForm;