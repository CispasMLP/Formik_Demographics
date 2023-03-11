import { Container, Grid, Typography} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import SelectWrapper from './component/FormsUI/Select';
import Textfield from './component/FormsUI/Textfiled';
import Header from './component/Header';
// import Select from './component/FormsUI/Select'
import countries from './data/countries.json'
import DateTimePicker from './component/DateTimePicker';
import CheckBox from './component/CheckBox';
import Button from './component/SubmittButton';


function App() {

  const INITIAL_FORM_STATE ={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    addressLine1:'',
    addressLine2:'',
    district:'',
    ta:'',
    country:'',
    arrivalDate:'',
    departureDate:'',
    message:'',
    termsOfService:''
  };
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
               .required('Required'),
    lastName:  Yup.string()
               .required('Required'),
    email: Yup.string()
           .email('Invalid email')
           .required('Required'),
    phone: Yup.number()
           .integer()
           .typeError('Please enter a valid phone number')
           .required('Required'),

    addressLine1:Yup.string().required('Required'),
    addressLine2:Yup.string(),
    district:Yup.string().required('Required'),
    ta:Yup.string().required('Required'),
    country:Yup.string().required("Required"),

    arrivalDate:Yup.date().required('Required'),
    departureDate:Yup.date().required('Required'),

    message:Yup.string(),

    termsOfService:Yup.boolean().oneOf([true],'The terms and conditions must be accepted')
    .required('The terms and conditions must be accepted')

  })

  return (
    <Grid container>

      <Grid item xs={12}>
        <Header/>
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth='md'>
          <div className=''>
            <Formik 
            initialValues={{...INITIAL_FORM_STATE}}
            validationSchema={FORM_VALIDATION}

            onSubmit={(values,formikHelpers)=>{
              console.log(values)
              formikHelpers.resetForm();
          }}
            >

              <Form>
                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Your Details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                    name='firstName'
                    label='Firstname'
                    />
                  </Grid>

                  <Grid item xs={6}>
                  <Textfield
                  name='lastName'
                  label='Lastname'
                  />
                  </Grid>

                  <Grid item xs={12}>
                  <Textfield
                  name='email'
                  label='Email'
                  />
                  </Grid>

                  <Grid item xs={12}>
                  <Textfield
                  name='phone'
                  label='Phone'
                  />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                  <Textfield
                  name='addressLine1'
                  label='Address Line 1'
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <Textfield
                  name='addressLine2'
                  label='Address Line 2'
                  />
                  </Grid>

                  <Grid item xs={6}>
                  <Textfield
                  name='district'
                  label='Home District'
                  />
                  </Grid>
                  <Grid item xs={6}>
                  <Textfield
                  name='ta'
                  label='Traditional Authority'
                  />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectWrapper
                    name='country'
                    label='Country'
                    options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Booking information
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                    name="arrivalDate"
                    label="Arrival Date"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                    name="departureDate"
                    label="Departure Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                    name="message"
                    label="Message"
                    multiline={true}
                    rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CheckBox
                    name='termsOfService'
                    legend="terms of service"
                    label='I agree'
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <Button>
                      Submit Button
                    </Button>

                  </Grid>

                </Grid>
              </Form>

            </Formik>
          </div>
        </Container>
      </Grid>


    </Grid>
  );
}

export default App;
