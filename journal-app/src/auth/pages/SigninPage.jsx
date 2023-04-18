import {useState, useMemo} from 'react';
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateUserWithEmailPasswordThunk } from '../../redux/auth/thunks';

const initialData = {
  displayName: '',
  email: '',
  password: ''
};

const formValidations = {
  email: [(value) => value.includes('@'), 'Email address must to have the @ character.'],
  password: [(value) => value.length >= 6, 'Password must to have 6 characters minimum.'],
  displayName: [(value) => value.length > 1, 'Name is required.']
};

export const SigninPage = () => { 

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { 
      displayName, email, password, onInputChange, formState,
      displayNameValid, emailValid, passwordValid, isFormValid
   } = useForm(initialData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreateUserWithEmailPasswordThunk(formState));
  };

  return (
    <AuthLayout title='Sign In'>
      <form onSubmit={onSubmit}>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Name' type='text' placeholder='Your name' autoComplete="off" fullWidth name='displayName' value={displayName} error={!!displayNameValid && formSubmitted} helperText={displayNameValid}  onChange={onInputChange}/>
            </Grid> 

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Email address' type='email' placeholder='email@gmail.com' autoComplete="off" fullWidth name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={emailValid}/>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Password' type='password' placeholder='Password' autoComplete="off" fullWidth name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={passwordValid}/>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
              <Grid item xs={12} sm={6}>
                { errorMessage && <Alert severity='error'>{ errorMessage }</Alert>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type='submit' variant='contained' fullWidth disabled={isCheckingAuthentication}>Create account</Button>
              </Grid>

            </Grid>
            
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Do you have an account already?</Typography>
              <Link color='inherit' component={RouterLink} to='/auth/login'>
                Go to login
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
};