import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextfieldWrapper =({name,...otherProps})=>{
    const [field, mata]= useField(name)

    const configTextfiled ={
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    }

    if(mata && mata.touched && mata.error){
        configTextfiled.error=true;
        configTextfiled.helperText = mata.error;
    }
    return(
        <TextField {...configTextfiled}/>
    )
};
 export default TextfieldWrapper;