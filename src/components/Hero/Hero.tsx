import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AiOutlineSearch } from 'react-icons/ai'

import styles from './Hero.module.scss';
import { SagaActions } from '../../redux/sagas/actions'

export default function Hero() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = useCallback(() => {
    if (searchValue !== '') {
      dispatch({ type: SagaActions.FetchProducts, payload: { search: searchValue }});
    }
  }, [dispatch, searchValue])

  return (
    <Box className={styles.Hero__section} sx={{ display: { xs: 'none', md: 'flex' }}}>
      <Box className={styles.Container}>
        <Box className={styles.Content}>
          <Typography className={styles.Heading} component='h1' fontWeight='bold'>
            Groceries Delivered in 90 Minute
          </Typography>
          <Typography className={styles.Paragraph} component='p'>
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
                    border: 'none',
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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              className={styles.Search__button}
              variant="contained"
              color="success"
              startIcon={<AiOutlineSearch />}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
