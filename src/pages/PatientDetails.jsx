import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faCapsules,
  faPrescription,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PatientDetails = () => (
  <Box sx={{ p: 3 }}>
    {/* Page Header */}
    <Typography variant="h4" align="center" gutterBottom>
      Patient Details
    </Typography>

    {/* Patient Details Section */}
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Avatar
        sx={{
          bgcolor: "#0077b6",
          width: 100,
          height: 100,
          mx: "auto",
          mb: 2,
        }}
      >
        <FontAwesomeIcon icon={faUser} size="2x" />
      </Avatar>
      <Card variant="outlined" sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
        <CardContent>
          <Typography>Name: John Doe</Typography>
          <Typography>Age: 45</Typography>
          <Typography>Gender: Male</Typography>
          <Typography>Other Details: Diabetic</Typography>
        </CardContent>
      </Card>
    </Box>

    {/* Medicine History Section */}
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Medicine History
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[1, 2, 3].map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              variant="outlined"
              sx={{
                "&:hover": { boxShadow: 6 },
                display: "flex",
                alignItems: "center",
                p: 2,
              }}
            >
              <Avatar sx={{ bgcolor: "#d32f2f", mr: 2 }}>
                <FontAwesomeIcon icon={faCapsules} />
              </Avatar>
              <CardContent>
                <Typography>Medicine {id}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Lab Reports Section */}
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Lab Reports
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[1, 2, 3].map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              variant="outlined"
              sx={{
                "&:hover": { boxShadow: 6 },
                display: "flex",
                alignItems: "center",
                p: 2,
              }}
            >
              <Avatar sx={{ bgcolor: "#0077b6", mr: 2 }}>
                <FontAwesomeIcon icon={faFilePdf} />
              </Avatar>
              <CardContent>
                <Typography gutterBottom>Report {id}</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Prescriptions Section */}
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Prescriptions
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[1, 2].map((id) => (
          <Grid item xs={12} sm={6} key={id}>
            <Card
              variant="outlined"
              sx={{
                "&:hover": { boxShadow: 6 },
                display: "flex",
                alignItems: "center",
                p: 2,
              }}
            >
              <Avatar sx={{ bgcolor: "#6a1b9a", mr: 2 }}>
                <FontAwesomeIcon icon={faPrescription} />
              </Avatar>
              <CardContent>
                <Typography gutterBottom>Prescription {id}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  This is a short detail about Pres {id}.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Monitor Health Section */}
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Link to="/MediTrack/remote-monitoring" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="success" size="large">
          Monitor Health
        </Button>
      </Link>
    </Box>
  </Box>
);

export default PatientDetails;
