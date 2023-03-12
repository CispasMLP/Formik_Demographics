import { useField, } from 'formik'
// import MuiPhoneNumber from 'material-ui-phone-number'
import { MuiTelInput } from 'mui-tel-input'
import React from 'react'

const PhoneNumber = ({name,...otherProps}) => {
    const[field,meta] = useField(name)
    // const [value, setValue] = useState('')
  

    // const handleChange =(newValue) =>{
    //     setValue(newValue);
        
    // }


    const configTextfiled ={
        // ...value,
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        // onChange: handleChange
    }

    if(meta && meta.touched && meta.error){
        configTextfiled.error=true;
        configTextfiled.helperText = meta.error;
    }
  return (
        <MuiTelInput {...configTextfiled}/>
    // <MuiPhoneNumber {...configTextfiled}/>  
  )
}

export default PhoneNumber