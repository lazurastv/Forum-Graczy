import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { confirmRegistration } from "../../fetchData/fetchUser";

export default function AccountConfirmedMessage() {
  let { token } = useParams();

  if (token != undefined) {
    console.log(token);
    confirmRegistration(token);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        gap: 1,
      }}
    >
      <Stack spacing={2}>
        <Typography sx={{ fontSize: 28 }}>Twoje konto zostało aktywowane</Typography>
        <Box>
            Gratulacje Twoja rejestracja jest kompletna!
        </Box>
        <Link to={`/`}>
          <Button sx={{ minWidth: "32px" }} size="large" variant="contained" color="secondary">
            Do strony głównej
          </Button>
        </Link>
        
      </Stack>
    </Box>
  );
}