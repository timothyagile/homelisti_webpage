"use-client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import SearchIcon from "@mui/icons-material/Search";

const categories: string[] = [
  "Apartments",
  "Commercial",
  "Office",
  "Restaurant",
  "Studio Home",
  "Villa",
];

const types: string[] = ["Sell", "Buy", "Rent"];

const locations: string[] = [
  "California",
  "Claremont",
  "Kansas",
  "Abliene",
  "Louisiana",
  "New Jersey",
];

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundImage: `url('https://homlisti.tpblog.net/wp-content/uploads/2021/08/home-3-main-banner.jpg')`,
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
          minHeight: "732px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
          }}
        >
          <Box
            sx={{
              margin: "auto",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                padding: "10px 0 10px 0",
                fontWeight: "bold",
                color: "white",
                fontSize: "54px",
                textAlign: "center",

                "@media (max-width:800px)": {
                  fontSize: "24px",
                },
              }}
            >
              Find the perfect place to <br /> live with your family
            </Typography>
            <ButtonGroup variant="text" sx={{ padding: "10px 0 10px 0" }}>
              <Grid
                container
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                {categories.map((category) => (
                  <Grid item key={category}>
                    <Button
                      startIcon={<SearchIcon />}
                      sx={{
                        textTransform: "none",
                        color: "white",
                        padding: "8px",

                        "&:hover": { color: "#00C194" },
                        "&:not(:last-child)": {
                          borderRight: "none",
                        },
                      }}
                    >
                      {category}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </ButtonGroup>
            <Grid container rowSpacing={1}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <TextField
                  label="Enter Keyword here ..."
                  variant="outlined"
                  sx={{ backgroundColor: "white", width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Select
                  label="Select Type"
                  sx={{
                    width: "100%",
                    backgroundColor: "white",
                  }}
                >
                  {types.map((type) => (
                    <MenuItem key={type}>{type}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <TextField
                  label="Select Location"
                  select
                  sx={{ backgroundColor: "white", width: "100%" }}
                >
                  {locations.map((location) => (
                    <MenuItem key={location}>{location}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Button
                  variant="contained"
                  endIcon={<SearchIcon />}
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#00C194",

                    "&:hover": {
                      backgroundColor: "#00A47E",
                    },
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "white",
                  padding: "10px 0 10px 0",
                  textAlign: "center",
                }}
              >
                We have more than 54,000 apartments, place & plot.
              </Typography>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Home;
