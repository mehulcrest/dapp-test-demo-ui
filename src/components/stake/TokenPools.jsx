import React from "react";
import { Container, Typography, Card, CardContent, Grid, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, InputAdornment, Chip } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StakingPoolGrowth from "./Chart";



const topStakers = [
  { rank: 1, address: "0x62A9...B721", amount: "2,500 $ELO", width: "100%" },
  { rank: 2, address: "0x89F1...E332", amount: "1,750 $ELO", width: "70%" },
  { rank: 3, address: "0x3DA6...F129", amount: "1,200 $ELO", width: "48%" },
  { rank: 4, address: "0x71BF...A492", amount: "950 $ELO", width: "38%" },
  { rank: 5, address: "0xF552...82D1", amount: "750 $ELO", width: "30%" },
];

const stakingHistory = [
  { date: "Feb 13, 2025", action: "Stake", amount: "50.0 $ELO", duration: "60 Days", rewards: "+3.2 $ELO", status: "Active", statusColor: "success" },
  { date: "Jan 20, 2025", action: "Unstake", amount: "25.0 $ELO", duration: "30 Days", rewards: "+1.8 $ELO", status: "Completed", statusColor: "default" },
  { date: "Dec 15, 2024", action: "Stake", amount: "25.0 $ELO", duration: "30 Days", rewards: "+1.8 $ELO", status: "Completed", statusColor: "default" },
];
const benefits = [
  "2x rewards on all food orders",
  "Priority service at participating restaurants",
  "Access to exclusive menu items",
  "Voting rights on future platform developments",
  "Early access to new features and services"
];

const EloStakingPage = () => {
  return (
    <Container maxWidth="lg" className="es__stake-wrap">
      {/* Hero Section */}
      <Typography variant="h2" align="center" gutterBottom color="title.main" sx={{ mb: 2, fontWeight: 700 }}>
        Stake $ELO - Maximize Your Rewards
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" paragraph className="es__content-wrap">
        Join our investor community and earn enhanced benefits by staking your tokens.
        Demonstrate your commitment to our ecosystem and unlock premium rewards.
      </Typography>

      {/* Current Staking Stats */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {[
          { label: "Currently Staked", value: "50.0 $ELO" },
          { label: "Reward Multiplier", value: "2.0x" },
          { label: "Unlocks In", value: "15 Days" },
          { label: "Your Pool Share", value: "0.5%" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} className="es__stacked-values">
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h4" color="text.primary" className="es__revard-value">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Benefits of Staking */}
      <Box className="staking-container">
        <Grid container spacing={3}>
          {/* Benefits Card */}
          <Grid item xs={12} md={4} className="es__staking-benifits">
            <Card sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" color="text.primary">
                Benefits of Staking
              </Typography>
              <CardContent className="es__benifits-list">
                <ul style={{ paddingLeft: 0, listStyle: "none", fontSize: "14px" }}>
                  {benefits.map((benefit, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                      <CheckCircleIcon color="success" style={{ marginRight: "8px" }} />
                      <Typography variant="body2" color="textlight.main">{benefit}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent className="es__com-stakingpool">
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Community Staking Pool
                </Typography>
                <Typography variant="h4" color="title.main" fontWeight="bold" gutterBottom>
                  10,500 $ELO
                </Typography>
                <Typography variant="body2" color="textlight.main">
                  Total stakers: 235
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Staking Actions */}
          <Grid item xs={12} md={8} className="es__stake-tokens">
            <Grid container>
              {/* Stake Tokens */}
              <Grid item xs={12} md={6} className="es__stake-tokensblock">
                <Card className="es__stake-token" sx={{ height: "100%" }}>
                  <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      Stake Tokens
                    </Typography>
                    <Box>
                      <label>Amount to Stake</label>
                      <TextField
                        fullWidth
                        type="number"
                        placeholder="0.0"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          endAdornment: <InputAdornment position="end">$ELO</InputAdornment>,
                        }}
                      />
                    </Box>
                    <Typography variant="caption" color="textSecondary">Balance: 75.5 $ELO</Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={4}><Button variant="outlined" color="primary">30 Days (2.0x)</Button></Grid>
                      <Grid item xs={4}><Button variant="contained" color="primary">60 Days (2.5x)</Button></Grid>
                      <Grid item xs={4}><Button variant="outlined" color="primary">90 Days (3.0x)</Button></Grid>
                    </Grid>
                    <Box display="flex" justifyContent="space-between" className="es__estimated-block">
                      <Typography variant="body2">Estimated Rewards (per month):</Typography>
                      <Typography variant="body1" fontWeight="bold" color="title.main">
                        +5.0 $ELO
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button variant="contained" color="primary" fullWidth className="es__stact-borderbtn">
                        Approve
                      </Button>
                      <Button variant="contained" color="primary" fullWidth className="es__stact-btn">
                        Stake
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Unstake Tokens */}
              <Grid item xs={12} md={6} className="es__unstake-tokens">
                <Card className="es__stake-token" sx={{ height: "100%" }}>
                  <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      Unstake Tokens
                    </Typography>
                    <Box>
                      <label>Amount to Unstake</label>
                      <TextField
                    fullWidth
                    type="number"
                    placeholder="0.0"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setAmount(e.target.value)} // Handle input change
                    InputProps={{
                      endAdornment: <InputAdornment position="end">$ELO</InputAdornment>,
                    }}
                      />
                    </Box>
                    <Typography variant="caption" color="textSecondary">Staked: 50.0 $ELO</Typography>
                    <Box 
                      sx={{  
                        borderRadius: 2, 
                        display: "flex", 
                        alignItems: "flex-start"
                      }}
                      className="es__wrnning-block"
                    >
                      <WarningAmberIcon sx={{ color: "yellow.700", mt: "4px", mr: 1.5 }} />
                      <Box>
                        <Typography variant="body1">
                          Early Unstaking Notice
                        </Typography>
                        <Typography variant="body2">
                          Unstaking before 60 days will incur a 10% penalty on rewards.
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" className="es__estimated-block">
                      <Typography variant="body2">Remaining lock period:</Typography>
                      <Typography variant="body1" fontWeight="bold" color="title.main">
                        15 Days
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} className="es__stact-btn">
                      Unstake
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Reward Tiers */}
      <Typography variant="h4" sx={{ mt: 5, mb: 3 }} color="text.primary">Reward Tiers</Typography>
      <Grid container spacing={3} color="text.primary">
        {[
          { tier: "Basic", range: "5-99 $ELO", multiplier: "2.0x", benefits: ["Standard rewards", "Basic voting rights"], },
          { tier: "Silver", range: "100-499 $ELO", multiplier: "2.5x", benefits: ["All Basic benefits", "Priority ordering", "10% discount on fees"], },
          { tier: "Gold", range: "500-999 $ELO", multiplier: "3.0x", benefits: ["All Silver benefits", "Exclusive menu access", "Monthly bonus rewards"], },
          { tier: "Platinum", range: "1000+ $ELO", multiplier: "4.0x", benefits: ["All Gold benefits", "VIP customer support", "Early feature access", "Quarterly NFT rewards"], },
        ].map((tier, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="full-height">
              <CardContent className="full-height">
                <Typography variant="h6" color="text.primary">{tier.tier}</Typography>
                <Typography variant="body2" color="textSecondary" color="text.primary">{tier.range}</Typography>
                <Typography variant="h5" color="title.main">{tier.multiplier}</Typography>
                <Box mb={2}>
                  <Box mt={2}>
                    <Typography variant="body3" color="textSecondary" gutterBottom>
                      Reward Multiplier
                    </Typography>
                    <ul className="es__reward-list">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i}>
                          <CheckCircleIcon color="success" />
                          <Typography variant="body1" color="textlight.main">{benefit}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Staking History */}
      <Box mb={5} mt={5}>
        <Typography variant="h4" mb={3} color="textSecondary">
          Staking History
        </Typography>
        <Card>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {["Date", "Action", "Amount", "Duration", "Rewards Earned", "Status"].map((header, index) => (
                      <TableCell key={index} sx={{ fontWeight: "bold", color: "text.secondary", textTransform: "uppercase" }}>
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stakingHistory.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell><Typography variant="body1" color="textlight.main">{row.date}</Typography></TableCell>
                      <TableCell><Typography variant="body1" color="textlight.main">{row.action}</Typography></TableCell>
                      <TableCell><Typography variant="body1" color="textlight.main">{row.action}</Typography></TableCell>
                      <TableCell><Typography variant="body1" color="textlight.main">{row.duration}</Typography></TableCell>
                      <TableCell sx={{ color: "green", fontWeight: "700" }} >{row.rewards}</TableCell>
                      <TableCell>
                        <Chip label={row.status} color={row.statusColor} variant="outlined" sx={{ fontWeight: "400" }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>



      {/* Community Staking Metrics */}
      <Typography variant="h4" sx={{ mt: 5, mb: 3 }} color="text.primary">
        Community Staking Metrics
      </Typography>
      <Grid container spacing={3}> 
      <StakingPoolGrowth />
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="text.secondary">
                Top Stakers
              </Typography>
              {topStakers.map((staker, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2, mt: 2 }}>
                  <Box sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "primary.light",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "text.secondary",
                    mr: 2,
                  }}>
                    {staker.rank}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body1"  color="text.primary">
                        {staker.address}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        {staker.amount}
                      </Typography>
                    </Box>
                    <Box sx={{
                      mt: 1,
                      height: 6,
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                    className="es__topstaker-bg">
                      <Box sx={{ height: "100%", width: staker.width, bgcolor: "primary.main" }} />
                    </Box>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
       
     

      {/* Future Staking Benefits */}
      <Typography variant="h4" sx={{ mt: 5, mb: 3 }} color="text.primary">Future Staking Benefits</Typography>
      <Card sx={{ background: "#121212, rgba(179, 245, 194, 0.61))", color: "white", borderRadius: 2, boxShadow: 3, p: 1 }}>
        <CardContent>
          <Box display="flex" flexDirection="column">
            <Box flex={1} mb={2}>
              <Typography variant="h6" gutterBottom color="text.primary">
                Upcoming Features
              </Typography>
              <ul style={{ listStyle: "none" }} className="es__discount-block">
                <li style={{ display: "flex", alignItems: "start", }}>
                  <Box sx={{ bgcolor: "blue.700", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                    <RedeemIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="body1" fontWeight="medium">
                      Merchandise Discounts
                    </Typography>
                    <Typography variant="body2" fontWeight={300}>
                      Exclusive discounts on ELO branded merchandise for platinum stakers
                    </Typography>
                  </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EloStakingPage;
