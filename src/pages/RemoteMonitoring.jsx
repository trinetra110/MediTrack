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
  faExclamationCircle,
  faFileUpload,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const getRiskCardColor = (score) => {
  if (score <= 30) return "#01cbc4"; // green
  if (score <= 60) return "#00aeed"; // blue
  return "#ff0000"; // red
};

const risk = [15.456186, 45.638176, 75.619342];

const RemoteMonitoring = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Page Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Remote Monitoring & Predictive Analysis
      </Typography>

      {/* Chronic Conditions Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" align="center" className="section-title">
          Chronic Conditions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card className="card" variant="outlined" sx={{ p: 3 }}>
              <CardContent>
                <Typography variant="h6">Condition Details</Typography>
                <Typography>Example Condition Info...</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="card" variant="outlined" sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6">Alerts</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ bgcolor: "#d32f2f", mr: 2 }}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </Avatar>
                  <Typography>Example Alert Message</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Upload Documents Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" align="center" className="section-title">
          Upload Documents
        </Typography>
        <Card
          className="card"
          variant="outlined"
          sx={{
            p: 3,
            width: "40%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography variant="h6" align="center">
              Select File:
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<FontAwesomeIcon icon={faFileUpload} />}
                sx={{ mb: 2 }}
              >
                Upload Files
              </Button>
              <br />
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FontAwesomeIcon icon={faHeartbeat} />}
              >
                Upload Symptoms
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Risk Analysis Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" align="center" className="section-title">
          Risk Analysis
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3].map((id) => {
            const riskScore = risk[id - 1];
            return (
              <Grid item xs={12} sm={4} key={id}>
                <Card
                  className="card"
                  variant="outlined"
                  sx={{
                    p: 2,
                    backgroundColor: getRiskCardColor(riskScore),
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      Risk Score: {riskScore.toFixed(2)}%
                    </Typography>
                    <Typography>Example Risk Info {id}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default RemoteMonitoring;
