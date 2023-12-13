"use client";
import { useState, useEffect } from "react";

import "../globals.css";
import Style from "./property.module.scss";
import api from "../api/client";

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
import NewsLetter from "@/components/newsLetter/newsLetter";

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

const product: {
  listing_id: number;
  author_id: number;
  title: string;
  price: string;
  category: {
    term_id: number;
    name: string;
    slug: string;
    count: number;
  };
  listingtype: {
    id: string;
    name: string;
  };
  view_count: number;
  contact: {
    id: number;
    location: {
      term_id: number;
      name: string;
      slug: string;
      count: number;
    };
    address: string;
    phone: string;
    whatsapp_number: string;
    email: string;
  };
  images: {
    ID: number;
    title: string;
    url: string;
    alt: string;
  }[];
  custom_fields: {
    id: number;
    label: string;
    value: {
      id: number;
      data: string;
    }[];
    choices: {
      id: string;
      name: string;
    }[];
  }[];
  description: string;
} = {
  listing_id: 17353,
  author_id: 4,
  title: "Modern apartment with a pole for buy",
  price: "350,000",
  category: {
    term_id: 204,
    name: "Restaurant",
    slug: "restaurant",
    count: 2,
  },
  listingtype: {
    id: "buy",
    name: "Buy",
  },
  view_count: 587,
  contact: {
    id: 1,
    location: {
      term_id: 172,
      name: "New Jersey",
      slug: "new-jersey",
      count: 6,
    },
    address: "South stump tavern road, 42",
    phone: "+052015698546",
    whatsapp_number: "+052015698546",
    email: "tom_steven@gmail.com",
  },
  images: [
    {
      ID: 17354,
      title: "rosy_janner1",
      url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/rosy_janner1.jpg",
      alt: "",
    },
    {
      ID: 17355,
      title: "rosy_janner2",
      url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/rosy_janner2.jpg",
      alt: "",
    },
    {
      ID: 17356,
      title: "rosy_janner3",
      url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/rosy_janner3.jpg",
      alt: "",
    },
  ],
  custom_fields: [
    {
      id: 4216,
      label: "Amenities",
      value: [
        {
          id: 1,
          data: "tv-cable",
        },
        {
          id: 2,
          data: "air-conditioning",
        },
        {
          id: 3,
          data: "barbeque",
        },
        {
          id: 4,
          data: "gym",
        },
        {
          id: 5,
          data: "swimming-pool",
        },
        {
          id: 6,
          data: "laundry",
        },
        {
          id: 7,
          data: "microwave",
        },
        {
          id: 8,
          data: "outdoor-shower",
        },
        {
          id: 9,
          data: "lawn",
        },
        {
          id: 10,
          data: "refrigerator",
        },
        {
          id: 11,
          data: "sauna",
        },
        {
          id: 12,
          data: "washer",
        },
      ],
      choices: [
        {
          id: "tv-cable",
          name: "TV Cable",
        },
        {
          id: "air-conditioning",
          name: "Air Conditioning",
        },
        {
          id: "barbeque",
          name: "Barbeque",
        },
        {
          id: "gym",
          name: "Gym",
        },
        {
          id: "swimming-pool",
          name: "Swimming Pool",
        },
        {
          id: "laundry",
          name: "Laundry",
        },
        {
          id: "microwave",
          name: "Microwave",
        },
        {
          id: "outdoor-shower",
          name: "Outdoor Shower",
        },
        {
          id: "lawn",
          name: "Lawn",
        },
        {
          id: "refrigerator",
          name: "Refrigerator",
        },
        {
          id: "sauna",
          name: "Sauna",
        },
        {
          id: "washer",
          name: "Washer",
        },
      ],
    },
    {
      id: 4323,
      label: "Type",
      value: [
        {
          id: 13,
          data: "apartment",
        },
      ],
      choices: [
        {
          id: "apartment",
          name: "Apartment",
        },
        {
          id: "office",
          name: "Office",
        },
        {
          id: "restaurant",
          name: "Restaurant",
        },
      ],
    },
    {
      id: 4322,
      label: "Parking",
      value: [
        {
          id: 16,
          data: "yes",
        },
      ],
      choices: [
        {
          id: "yes",
          name: "Yes",
        },
        {
          id: "no",
          name: "No",
        },
      ],
    },
    {
      id: 4316,
      label: "Bedroom",
      value: [
        {
          id: 20,
          data: "3",
        },
      ],
      choices: [
        {
          id: "1",
          name: "1",
        },
        {
          id: "2",
          name: "2",
        },
        {
          id: "3",
          name: "3",
        },
        {
          id: "4",
          name: "4",
        },
        {
          id: "5",
          name: "5",
        },
        {
          id: "6",
          name: "6",
        },
      ],
    },
    {
      id: 4321,
      label: "Bath",
      value: [
        {
          id: 26,
          data: "3",
        },
      ],
      choices: [
        {
          id: "1",
          name: "1",
        },
        {
          id: "2",
          name: "2",
        },
        {
          id: "3",
          name: "3",
        },
        {
          id: "4",
          name: "4",
        },
      ],
    },
    {
      id: 4692,
      label: "Purpose",
      value: [
        {
          id: 28,
          data: "sell",
        },
      ],
      choices: [
        {
          id: "sell",
          name: "Sell",
        },
        {
          id: "buy",
          name: "Buy",
        },
        {
          id: "rent",
          name: "For Rent",
        },
      ],
    },
  ],
  description: "",
};

const Property = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [initialProductListing, setInitialProductListing] = useState(9);
  const [loadMoreBtnDisplay, setLoadMoreBtnDisplay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("grid");
  const [listingsData, setListingsData] = useState([
    {
      listing_id: 17353,
      author_id: 4,
      title: "Modern apartment with a pole for buy",
      price: "350,000",
      category: {
        term_id: 204,
        name: "Restaurant",
        slug: "restaurant",
        count: 2,
      },
      listingtype: {
        id: "buy",
        name: "Buy",
      },
      view_count: 587,
      contact: {
        id: 1,
        location: {
          term_id: 172,
          name: "New Jersey",
          slug: "new-jersey",
          count: 6,
        },
        address: "South stump tavern road, 42",
        phone: "+052015698546",
        whatsapp_number: "+052015698546",
        email: "tom_steven@gmail.com",
      },
      images: [
        {
          ID: 17354,
          title: "rosy_janner1",
          url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/rosy_janner1.jpg",
          alt: "",
        },
        {
          ID: 17355,
          title: "rosy_janner2",
          url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/rosy_janner2.jpg",
          alt: "",
        },
        {
          ID: 17356,
          title: "rosy_janner3",
          url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/rosy_janner3.jpg",
          alt: "",
        },
      ],
      custom_fields: [
        {
          id: 4216,
          label: "Amenities",
          value: [
            {
              id: 1,
              data: "tv-cable",
            },
            {
              id: 2,
              data: "air-conditioning",
            },
            {
              id: 3,
              data: "barbeque",
            },
            {
              id: 4,
              data: "gym",
            },
            {
              id: 5,
              data: "swimming-pool",
            },
            {
              id: 6,
              data: "laundry",
            },
            {
              id: 7,
              data: "microwave",
            },
            {
              id: 8,
              data: "outdoor-shower",
            },
            {
              id: 9,
              data: "lawn",
            },
            {
              id: 10,
              data: "refrigerator",
            },
            {
              id: 11,
              data: "sauna",
            },
            {
              id: 12,
              data: "washer",
            },
          ],
          choices: [
            {
              id: "tv-cable",
              name: "TV Cable",
            },
            {
              id: "air-conditioning",
              name: "Air Conditioning",
            },
            {
              id: "barbeque",
              name: "Barbeque",
            },
            {
              id: "gym",
              name: "Gym",
            },
            {
              id: "swimming-pool",
              name: "Swimming Pool",
            },
            {
              id: "laundry",
              name: "Laundry",
            },
            {
              id: "microwave",
              name: "Microwave",
            },
            {
              id: "outdoor-shower",
              name: "Outdoor Shower",
            },
            {
              id: "lawn",
              name: "Lawn",
            },
            {
              id: "refrigerator",
              name: "Refrigerator",
            },
            {
              id: "sauna",
              name: "Sauna",
            },
            {
              id: "washer",
              name: "Washer",
            },
          ],
        },
        {
          id: 4323,
          label: "Type",
          value: [
            {
              id: 13,
              data: "apartment",
            },
          ],
          choices: [
            {
              id: "apartment",
              name: "Apartment",
            },
            {
              id: "office",
              name: "Office",
            },
            {
              id: "restaurant",
              name: "Restaurant",
            },
          ],
        },
        {
          id: 4322,
          label: "Parking",
          value: [
            {
              id: 16,
              data: "yes",
            },
          ],
          choices: [
            {
              id: "yes",
              name: "Yes",
            },
            {
              id: "no",
              name: "No",
            },
          ],
        },
        {
          id: 4316,
          label: "Bedroom",
          value: [
            {
              id: 20,
              data: "3",
            },
          ],
          choices: [
            {
              id: "1",
              name: "1",
            },
            {
              id: "2",
              name: "2",
            },
            {
              id: "3",
              name: "3",
            },
            {
              id: "4",
              name: "4",
            },
            {
              id: "5",
              name: "5",
            },
            {
              id: "6",
              name: "6",
            },
          ],
        },
        {
          id: 4321,
          label: "Bath",
          value: [
            {
              id: 26,
              data: "3",
            },
          ],
          choices: [
            {
              id: "1",
              name: "1",
            },
            {
              id: "2",
              name: "2",
            },
            {
              id: "3",
              name: "3",
            },
            {
              id: "4",
              name: "4",
            },
          ],
        },
        {
          id: 4692,
          label: "Purpose",
          value: [
            {
              id: 28,
              data: "sell",
            },
          ],
          choices: [
            {
              id: "sell",
              name: "Sell",
            },
            {
              id: "buy",
              name: "Buy",
            },
            {
              id: "rent",
              name: "For Rent",
            },
          ],
        },
      ],
      description: "",
    },
  ]);

  const handleChangePriceRange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as number[]);
  };

  const handleLoadMoreProduct = () => {
    if (initialProductListing + 9 >= listingsData.length) {
      setLoadMoreBtnDisplay(false);
      setIsLoading(false);
      return setInitialProductListing(listingsData.length);
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

  useEffect(() => {
    handleLoadListing();
  }, []);

  const handleLoadListing = () => {
    api
      .get("listings")
      .then((res) => {
        if (res.status === 200) {
          setListingsData(res.data);
        }
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                  Showing 1–{initialProductListing} of {listingsData.length}{" "}
                  results
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
                {listingsData.slice(0, initialProductListing).map((item, i) =>
                  view === "grid" ? (
                    <Grid item xs={12} sm={12} md={4} lg={4} key={i}>
                      <ProductCard view={view} product={item} />
                    </Grid>
                  ) : (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={i}>
                      <ProductCard view={view} product={item} />
                    </Grid>
                  )
                )}
              </Grid>
              <div className={Style.loadMoreWrap}>
                <Typography>
                  You have viewed {initialProductListing} of{" "}
                  {listingsData.length} products
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
        <NewsLetter />
      </div>
    </ThemeProvider>
  );
};

export default Property;
