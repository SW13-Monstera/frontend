import { TextField, Typography, Box, Button } from '@mui/material';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import PageTemplate from '../../templates/PageTemplate';

export const NoticePage = () => {
  const createNotice = () => {
    const content = (document.getElementById('content') as HTMLInputElement).value;
    const link = (document.getElementById('link') as HTMLInputElement).value;
    const userId = (document.getElementById('userId') as HTMLInputElement).value;
    userApiWrapper
      .createNotice({
        content,
        link,
        userId,
      })
      .then(() => {
        alert('알림이 생성되었습니다.');
      })
      .catch(() => {
        alert('오류가 발생했습니다.');
      });
  };

  return (
    <PageTemplate>
      <Typography sx={{ mb: 2 }}>알림 생성</Typography>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{ display: 'flex', flexDirection: 'column' }}
        id='notice-form'
      >
        <TextField
          id='content'
          label='내용'
          variant='outlined'
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id='link'
          label='링크(URL)'
          variant='outlined'
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
          type={'url'}
        />
        <TextField
          id='userId'
          label='사용자 ID'
          variant='outlined'
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant='contained' sx={{ mt: 2 }} onClick={createNotice}>
          생성
        </Button>
      </Box>
    </PageTemplate>
  );
};
