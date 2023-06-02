import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AiOutlineSearch } from 'react-icons/ai'

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <Box className={styles.Hero__section}>
      <Box className={styles.Container}>
        <Box className={styles.Content}>
          <Typography className={styles.Heading} variant='h2' component="h1">
            Groceries Delivered in 90 Minute
          </Typography>
          <Typography className={styles.Paragraph} variant='body1' component="p">
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </Typography>
          <Box className={styles.Search__box}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                    borderRight: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: '1px solid green',
                    borderRight: 'none',
                  },
                  '& input': {
                    padding: '12px 12px 10px 12px',
                  }
                },
              }}
              className={styles.Search__input}
              placeholder="Search your product here"
            />
            <Button className={styles.Search__button} variant="contained" color="success" startIcon={<AiOutlineSearch />}>
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
