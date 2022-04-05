import { Button, TextField } from "@mui/material";

export default function FormAdd() {
  const add = () => {};
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="filled"
        color="primary"
        // value={nameS}
        // onChange={handleSearch}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="filled"
        color="primary"
        // value={nameS}
        // onChange={handleSearch}
      />
      <TextField
        id="outlined-basic"
        label="Language"
        variant="filled"
        color="primary"
        // value={nameS}
        // onChange={handleSearch}
      />
      <TextField
        id="outlined-basic"
        label="Visibility"
        variant="filled"
        color="primary"
        // value={nameS}
        // onChange={handleSearch}
      />
      <TextField
        id="outlined-basic"
        label="Size"
        variant="filled"
        color="primary"
        // value={nameS}
        // onChange={handleSearch}
      />
      <Button onClick={add} variant="contained" color="success">
        ADD
      </Button>
    </>
  );
}
