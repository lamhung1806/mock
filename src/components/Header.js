import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchUser } from "../redux/action/userAction";

export default function Header() {
  const [nameS, setNames] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setNames(e.target.value);
  };
  const search = () => {
    dispatch(searchUser(nameS));
    setNames("");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="filled"
            color="primary"
            value={nameS}
            onChange={handleSearch}
          />
          <Button onClick={search} variant="contained" color="warning">
            Search
          </Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            USER LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
