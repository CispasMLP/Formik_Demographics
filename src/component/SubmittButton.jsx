import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'
import React from 'react'

const SubmittButton = ({children,...otherProps}) => {
    const {submitForm} = useFormikContext()

    const handleSubmit =()=>{
        submitForm();
    }

    const configButton={
        variant: 'contained',
        color:'primary',
        fullWidth: true,
        onClick: handleSubmit
    }
  return (
    <Button {...configButton}>
        {children}
    </Button>
  )
}

export default SubmittButton