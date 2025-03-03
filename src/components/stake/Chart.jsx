import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";

const ChartContainer = styled(Box)({
  position: "relative",
  height: "150px",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-around",
  borderBottom: "2px solid #e0e0e0",
  paddingBottom: "10px",
});

const ChartBar = styled(Box)(({ height }) => ({
  width: "10px",
  backgroundColor: "#3b82f6",
  transition: "height 0.3s ease-in-out",
  borderRadius: "4px",
  height: height,
}));

const StakingPoolGrowth = () => {
  const data = [30, 45, 55, 60, 70, 75, 80, 90, 100];
  const labels = ["Oct", "Nov", "Dec", "Jan", "Feb"];

  return (
    <Grid item xs={12} md={6} className="full-height es__chart-wrap">
    <Paper elevation={3} sx={{ p: 3,  bgcolor: "#121212" }} className="es__chart-inner">
      <Typography variant="h6" gutterBottom color="text.primary">
        Staking Pool Growth
      </Typography>
      <ChartContainer className="es__bar-chart">
        {data.map((height, index) => (
          <ChartBar key={index} height={`${height}%`} />
        ))}
      </ChartContainer>
      <Box display="flex" justifyContent="space-between" mt={1} fontSize="12px" color="gray">
        {labels.map((label, index) => (
          <Typography key={index} variant="caption">
            {label}
          </Typography>
        ))}
      </Box>
    </Paper>
    </Grid>
   
  );
};

export default StakingPoolGrowth;
