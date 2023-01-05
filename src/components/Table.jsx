import { Container, CssBaseline, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';



function Table() {
  const [value, setValue] = React.useState(dayjs('01-05-2023'));
  const handleDate = (newValue) => {
    setValue(newValue);
  };

  const columns = [
    { field: 'id', headerName: 'Vechicle No', width: 200 },
    { field: 'ownername', headerName: 'Owner name', width: 200 },
    { field: 'vechileModal', headerName: 'Model name', width: 200 },
    { field: 'penality', headerName: 'Penality', width: 200 },
    { field: 'penalityReason', headerName: 'Penality Reason', width: 300 },
  ];

  const rows = [
    // { id: 'KL-31-3021', lastname: 'Snow', firstName: 'Jon', age: 35 },
    { id: 'KL-01-2012', vechileModal: 'Alto Lxi', ownername: 'Cersei', penality: 1000 , penalityReason: 'Over Speed' },
    { id: 'KL-03-8372', vechileModal: 'Sandro', ownername: 'Jaime', penality: 500 , penalityReason: 'Seart Belt' },
    { id: 'KL-20-3637', vechileModal: 'Mahendra', ownername: 'Arya', penality: 500 , penalityReason: 'Exta Modification' },
    { id: 'KL-04-9474', vechileModal: 'Thar', ownername: 'Daenerys', penality: 1000 , penalityReason: 'Over Speed' },
    { id: 'KL-05-2638', vechileModal: 'Omini', ownername: 'Selina', penality: 500 , penalityReason: 'Seat Belt' },
    { id: 'KL-48-0383', vechileModal: 'Swift', ownername: 'Ferrara', penality: 500, penalityReason: 'Over Speed' },
    { id: 'KL-08-7353', vechileModal: 'Polo', ownername: 'Rossini', penality: 1000 , penalityReason: 'Over Speed' },
    { id: 'KL-07-3736', vechileModal: 'Unicorn', ownername: 'Harvey', penality: 1000 , penalityReason: 'Pillion Helmet' },
  ];

  return (
    <Container sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="initial">
          Penality Vehicles
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
            size='small'
            sx={{ minWidth: '100%', margin: '1rem 0' }}
          />
        </LocalizationProvider>
      </Box>
      <CssBaseline />

      <Box sx={{ mt: 7, minHeight: 200 }}>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{ minHeight: 400 }}
        />
      </Box>
    </Container>
  )
}

export default Table