import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button, CssBaseline, TextField, Box } from '@mui/material';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { setUserInfo } from '../../utils';

const theme = createTheme();

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    authApiWrapper
      .login({
        email: data.get('email')?.toString() || '',
        password: data.get('password')?.toString() || '',
      })
      .then((response) => {
        if (!response) return;
        setUserInfo(response);
        navigate(URL.LONG_PROBLEM_LIST);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              InputLabelProps={{ shrink: true }}
            />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
