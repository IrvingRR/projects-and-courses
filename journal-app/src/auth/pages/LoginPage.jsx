import { Google } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignInThunk, startLoginWithEmailPasswordThunk } from "../../redux/auth/thunks";
import { useMemo } from "react";

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPasswordThunk(formState));
  };  

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignInThunk());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} aria-label="form-login">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Email address' type='email' name='email' placeholder='email@gmail.com' autoComplete="off" fullWidth value={email} onChange={onInputChange}/>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Password' type='password' name='password' placeholder='Password' autoComplete="off" fullWidth value={password} onChange={onInputChange}/>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
              <Grid item xs={12} sm={6}>
                  { errorMessage && <Alert severity='error'>{errorMessage}</Alert> }
              </Grid> 

              <Grid item xs={12} sm={6}>
                <Button type='submit' variant='contained' fullWidth disabled={isAuthenticating}>Login</Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating} >
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>
            
            <Grid container direction='row' justifyContent='end'>
              <Link color='inherit' component={RouterLink} to='/auth/signin'>
                Create a new account
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
};