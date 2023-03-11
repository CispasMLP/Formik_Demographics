import { Checkbox } from '@material-ui/core'
import { FormControl,FormGroup, FormLabel } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useField, useFormikContext } from 'formik';

const CheckBox = ({name,label,legend,...otherProps}) => {

    const {setFieldValue} = useFormikContext();

    const [field,meta] = useField(name)

    const handleChange =evt =>{
        const {checked} = evt.target;
        setFieldValue(name,checked);
    };

    const configCheckbox={
        ...otherProps,
        ...field,
        onChange: handleChange
    }

    const configFormControl ={};
    if(meta && meta.touched && meta.error){
        configFormControl.error = true;
    }
  return (
    <FormControl {...configFormControl}>
        <FormLabel component='legend'>{legend}</FormLabel>
        <FormGroup>
            <FormControlLabel
                control={<Checkbox {...configCheckbox}/>}
                label={label} />
           
        </FormGroup>
    </FormControl>
  )
}

export default CheckBox