import { Box, Button, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import{object,string} from 'yup'

const MaterialForm = () => {
    const initialValues ={
        email: "",
        name: "",
        password: "",
    }
    
  return (
    <div>
        <Formik 
        initialValues={initialValues}
        onSubmit={(values,formikHelpers)=>{
            console.log(values)
            formikHelpers.resetForm();
        }}
        validationSchema={object({
            email: string().required("Please enter email").email('Invalid email'),
            name: string().required('Please enter name'),
            password:string().required('Plase enter password')
        })}
        >
            {({errors,isValid,touched,dirty})=>(<Form>
                <Field 
                    name='email' 
                    type='email' 
                    as={TextField} 
                    variant='outlined' 
                    color='primary' 
                    label='Email'
                    // fullWidth
                    error ={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                    />
                    <Box height={14}/>  
                <Field 
                    name='name' 
                    type='name' 
                    as={TextField} 
                    variant='outlined' 
                    color='primary' 
                    label='Name'

                    error ={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                    />
                    <Box height={14}/>
                <Field 
                    name='password' 
                    type='password' 
                    as={TextField} 
                    variant='outlined' 
                    color='primary' 
                    label='Password'
                    error ={Boolean(errors.password) && Boolean(touched.password)}
                    helperText={Boolean(touched.password) && errors.password}
                    />
                    <Box height={14}/>
                <Button 
                type='submit' 
                variant='contained' 
                size='large'
                disabled={!dirty || !isValid}
                >SignUp</Button>
            </Form>)}
        </Formik>
    </div>
  )
}

export default MaterialForm