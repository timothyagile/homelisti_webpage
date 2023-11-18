"use client";
import { useState } from "react";

import "../globals.css";
import Style from "./property.module.scss";

import Image from "next/image";

import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Divider,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  MenuItem,
  Select,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
  IconButton,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ProductCard from "@/components/productCard/productCard";
import ScrollToTopButton from "@/components/scrollToTopButton";

const types: string[] = ["Sell", "Buy", "Rent"];

const categories: string[] = [
  "Apartments",
  "Commercial",
  "Office",
  "Restaurant",
  "Studio Home",
  "Villa",
];

const locations: string[] = [
  "California",
  "Claremont",
  "Kansas",
  "Abliene",
  "Louisiana",
  "New Jersey",
];

const amenities: string[] = [
  "TV Cable",
  "Air Conditioning",
  "Barbeque",
  "Gym",
  "Swimming Pool",
  "Laundry",
  "Microwave",
  "Outdoor Shower",
  "Lawn",
  "Refrigerator",
  "Sauna",
  "Washer",
];

const bedroom: number[] = [1, 2, 3, 4, 5, 6];

const bathroom: number[] = [1, 2, 3, 4];

const sortby: { id: string; title: string }[] = [
  { id: "date-desc", title: "Default" },
  { id: "title-asc", title: "A to Z ( title )" },
  { id: "title-desc", title: "Z to A ( title )" },
  { id: "date-asc", title: "Date added ( oldest )" },
  { id: "views-desc", title: "Most viewed" },
  { id: "views-asc", title: "Less view" },
  { id: "price-asc", title: "Price ( low to high )" },
  { id: "price-desc", title: "Price ( High to low )" },
];

const temp: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a47e", // Replace with your preferred color
    },
  },
});

const Property = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [initialProductListing, setInitialProductListing] = useState(9);
  const [loadMoreBtnDisplay, setLoadMoreBtnDisplay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("grid");

  const handleChangePriceRange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as number[]);
  };

  const handleLoadMoreProduct = () => {
    if (initialProductListing + 9 >= temp.length) {
      setLoadMoreBtnDisplay(false);
      setIsLoading(false);
      return setInitialProductListing(temp.length);
    }
    setIsLoading(false);
    setInitialProductListing(initialProductListing + 9);
  };

  const handleGridView = () => {
    setView("grid");
  };

  const handleListView = () => {
    setView("list");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={Style.propertyContainer}>
        <ScrollToTopButton />

        {/* Breadcrumbs */}
        <Container maxWidth="xl">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className={Style.breadCrumbsContainer}
          >
            <Link
              underline="none"
              color="inherit"
              href="/"
              className={Style.breadCrumbsLink}
            >
              Home
            </Link>
            <Typography color="var(--primary-color)">All Properties</Typography>
          </Breadcrumbs>
        </Container>

        <Divider />

        <Container maxWidth="xl" className={Style.mainContainer}>
          <Grid container spacing={2}>
            {/* Sidebar */}
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Card className={Style.advancedSearchContainer}>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    gutterBottom
                    className={Style.advancedSearchHeader}
                  >
                    Advanced Search
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="What are you looking for?"
                    className={Style.advancedSearchItem}
                  />
                  <Select
                    fullWidth
                    displayEmpty
                    variant="outlined"
                    defaultValue="Property Type"
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    className={Style.advancedSearchItem}
                  >
                    <MenuItem value="Property Type">Property Type</MenuItem>
                    {types.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  <Select
                    fullWidth
                    displayEmpty
                    variant="outlined"
                    placeholder="All Categories"
                    defaultValue="All Categories"
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    className={Style.advancedSearchItem}
                  >
                    <MenuItem value="All Categories">All Categories</MenuItem>
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                  <Select
                    fullWidth
                    displayEmpty
                    variant="outlined"
                    placeholder="All Cities"
                    defaultValue="All Cities"
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    className={Style.advancedSearchItem}
                  >
                    <MenuItem value="All Cities">All Cities</MenuItem>
                    {locations.map((location) => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </Select>

                  <Box>
                    <Accordion className={Style.advancedSearchAmenities}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className={Style.advancedSearchSummary}
                      >
                        <Typography>Amenities</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <FormGroup>
                          {amenities.map((amenity) => (
                            <FormControlLabel
                              key={amenity}
                              control={<Checkbox />}
                              label={amenity}
                            />
                          ))}
                        </FormGroup>
                      </AccordionDetails>
                      <Accordion className={Style.advancedSearchAmenities}>
                        <AccordionSummary
                          expandIcon={<AddIcon />}
                          className={Style.advancedSearchSummary}
                        >
                          <Typography>Overview</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Select
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            defaultValue=""
                            MenuProps={{
                              disableScrollLock: true,
                            }}
                            className={Style.advancedSearchItem}
                          >
                            <MenuItem value="">Bedroom</MenuItem>
                            {bedroom.map((item) => (
                              <MenuItem key={item} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                          <Select
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            defaultValue=""
                            MenuProps={{
                              disableScrollLock: true,
                            }}
                            className={Style.advancedSearchItem}
                          >
                            <MenuItem value="">Bath</MenuItem>
                            {bathroom.map((item) => (
                              <MenuItem key={item} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </AccordionDetails>
                      </Accordion>
                    </Accordion>
                  </Box>

                  <Box>
                    <Box className={Style.advancedSearchRangeSliderLabel}>
                      <Typography>Price</Typography>
                      <Typography>
                        ${priceRange[0] * 500} - ${priceRange[1] * 500}
                      </Typography>
                    </Box>
                    <Slider
                      value={priceRange}
                      onChange={handleChangePriceRange}
                      disableSwap
                    />
                  </Box>
                </CardContent>

                <CardActions sx={{ display: "flex" }}>
                  <Button sx={{ flexGrow: "1" }} variant="contained">
                    Find Property
                  </Button>
                  <Button variant="outlined" startIcon={<RestartAltIcon />}>
                    Reset
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Product */}
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <div className={Style.listingsActions}>
                <Typography className={Style.resultCount}>
                  Showing 1–{initialProductListing} of {temp.length} results
                </Typography>
                <div className={Style.listingsActionsWrap}>
                  <Typography className={Style.orderByTitle}>
                    Sort by:{" "}
                  </Typography>
                  <Select
                    fullWidth
                    displayEmpty
                    variant="outlined"
                    placeholder="Default"
                    defaultValue="date-desc"
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    className={Style.orderBy}
                  >
                    {sortby.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                  <ButtonGroup
                    className={Style.viewSwitcher}
                    variant="outlined"
                  >
                    <Button
                      sx={{
                        color: view === "list" ? "#00a47e" : "#b4b4b4",
                      }}
                      className={Style.viewSwitcherBtn}
                      onClick={() => handleListView()}
                    >
                      <ListIcon />
                    </Button>
                    <Button
                      sx={{
                        color: view === "grid" ? "#00a47e" : "#b4b4b4",
                      }}
                      className={Style.viewSwitcherBtn}
                      onClick={() => handleGridView()}
                    >
                      <ViewModuleIcon />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <Grid container spacing={4}>
                {temp.slice(0, initialProductListing).map((item) =>
                  view === "grid" ? (
                    <Grid item xs={12} sm={12} md={4} lg={4} key={item}>
                      <ProductCard view={view} />
                    </Grid>
                  ) : (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={item}>
                      <ProductCard view={view} />
                    </Grid>
                  )
                )}
              </Grid>
              <div className={Style.loadMoreWrap}>
                <Typography>
                  You have viewed {initialProductListing} of {temp.length}{" "}
                  products
                </Typography>
                <LoadingButton
                  className={Style.loadMoreBtn}
                  variant="contained"
                  loading={isLoading}
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => handleLoadMoreProduct(), 3000);
                  }}
                  sx={{ display: loadMoreBtnDisplay ? "flex" : "none" }}
                >
                  Load more
                </LoadingButton>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={Style.newsLetterWrapper}>
          <Container maxWidth="xl">
            <div className={Style.container}>
              <div>
                <Typography
                  variant="h2"
                  component="h2"
                  className={Style.mainTitle}
                >
                  Sign up for newsletter
                </Typography>
                <Typography className={Style.description}>
                  Get latest news and update
                </Typography>
              </div>
              <div className={Style.emailWrap}>
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className={Style.emailInput}
                />
                <div>
                  <Button className={Style.subcribeBtn}>Subcribe</Button>
                </div>
              </div>
            </div>
            <Image
              src="/newsletter-bg.png"
              alt="newsletter-bg"
              width={357}
              height={131}
              className={Style.bgImage}
            />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Property;
