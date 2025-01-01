import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DoctorDashboard = () => (
  <Box sx={{ p: 3 }}>
    {/* Page Header */}
    <Typography variant="h4" align="center" gutterBottom>
      Doctor Dashboard
    </Typography>

    {/* Patient List Section */}
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Patient List
      </Typography>
      <Grid container spacing={2}>
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
                <FontAwesomeIcon icon={faUser} />
              </Avatar>
              <CardContent>
                <Typography>Last Update: Month</Typography>
                <Typography>Condition: Critical</Typography>
                <Link to="/MediTrack/patient-details" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary" fullWidth>
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Real-Time Alerts */}
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Real-Time Alerts
      </Typography>
      <Grid container spacing={2}>
        {[
          "Spike in blood sugar for patient ID-2",
          "Fall in blood pressure for patient ID-3",
        ].map((alert, index) => (
          <Grid item xs={12} sm={6} key={index}>
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
                <FontAwesomeIcon icon={faExclamationCircle} />
              </Avatar>
              <CardContent>
                <Typography>{alert}</Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Button variant="contained" color="success" fullWidth>
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="error" fullWidth>
                      Ignore
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default DoctorDashboard;
