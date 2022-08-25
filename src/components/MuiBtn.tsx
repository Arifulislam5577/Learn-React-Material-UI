import React from "react";

import { Button, Stack } from "@mui/material";
const MuiBtn = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={3} direction="row">
        <Button variant="text" href="https://youtube.com">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outline</Button>
      </Stack>
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Stack direction="row" display="block" spacing={3}>
        <Button variant="contained" size="small" color="secondary">
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary">
          medium
        </Button>
        <Button variant="contained" size="large" color="warning">
          large
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiBtn;
