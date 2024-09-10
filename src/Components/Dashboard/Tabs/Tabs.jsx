import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid/Grid';
import './tabs.css'
import List from '../List/List';

export default function TabsComponent({ coins }) {
  const [value, setValue] = React.useState('1');
  const theme = createTheme({
    palette: {
      primary: {
        main: '#9c4dc7',
      }
    }
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "20vw",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Geologica",
    textTransform: "capitalize",
  }

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth'>
            <Tab label="Grid" value="1" sx={style} />
            <Tab label="List" value="2" sx={style} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className='grid'>
            {coins.map((coin, i) => {
              // console.log(coin.name) 
              // return (
              //   <p key={i}>
              //     <img key={i} src={coin.image} alt='coin-img' />
              //     {i + 1}.{coin.name}
              //   </p>
              // )

              return <Grid coin={coin} key={i} />

            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <table className='list'>
            {coins.map((coin, i) => {
              // console.log(coin.name) 
              // return (
              //   <p key={i}>
              //     {i + 1}.{coin.id}
              //   </p>
              return <List coin={coin} key = {i}/>
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
