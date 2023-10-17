"use client";

import * as React from "react";
import { Transform } from "stream";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { MenuItem } from "@mui/material";

let pages: { id: number; page: string; link: string }[] = [
  {
    id: 1,
    page: "Home",
    link: "/",
  },
  {
    id: 2,
    page: "About",
    link: "/about",
  },
  {
    id: 3,
    page: "Property",
    link: "/property",
  },
  {
    id: 4,
    page: "Pages",
    link: "/pages",
  },
  {
    id: 5,
    page: "Contact",
    link: "/contact",
  },
];

function Header() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
        backgroundColor: "#0E2E50",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ "&:hover": { cursor: "pointer" } }}>
            <Image src="./logo_light.svg" width={136} height={36} alt="Logo" />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{
                  textTransform: "none",
                  padding: "16px",
                  borderRadius: "0",
                  color: "white",
                  "&:hover": {
                    color: "#00C194",
                    borderBottom: "2px solid #00C194",
                  },
                }}
                onClick={() => router.push(page.link)}
              >
                {page.page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { md: "flex", flexDirection: "row" },
              ".MuiBadge-badge": {
                backgroundColor: "#00C194",
                top: "4px",
                right: "4px",
              },
            }}
          >
            <Badge badgeContent={4}>
              <IconButton
                aria-label="favorite"
                sx={{
                  "&:hover": {
                    backgroundColor: "#00C194",
                    border: "1px solid #00C194",
                  },
                  "&:hover .icon-rotate": {
                    transform: "rotateY(180deg)",
                    transition: "transform 0.6s ease",
                  },
                  color: "white",
                  border: "1px solid white",
                  marginRight: "4px",
                  marginLeft: "4px",
                  height: "36px",
                  width: "36px",
                }}
              >
                <FavoriteBorderIcon
                  className="icon-rotate"
                  sx={{ height: "16px", width: "16px" }}
                />
              </IconButton>
            </Badge>

            <IconButton
              aria-label="account"
              sx={{
                "&:hover": {
                  backgroundColor: "#00C194",
                  border: "1px solid #00C194",
                },
                "&:hover .icon-rotate": {
                  transform: "rotateY(180deg)",
                  transition: "transform 0.6s ease",
                },
                color: "white",
                border: "1px solid white",
                marginLeft: "4px",
                marginRight: "4px",
                height: "36px",
                width: "36px",
              }}
            >
              <PersonOutlineIcon
                className="icon-rotate"
                sx={{ height: "16px", width: "16px" }}
              />
            </IconButton>

            <Button
              sx={{
                display: { xs: "none", md: "flex" },
                borderRadius: "25px",
                marginLeft: "4px",
                marginRight: "4px",
                backgroundColor: "#00C194",
                "&:hover": {
                  backgroundColor: "#00A47E",
                },
                "& .icon-rotate": {
                  transform: "rotate(0deg)", // Initial state (no rotation)
                  transition: "transform 0.3s ease", // Define the animation transition
                },
                "&:hover .icon-rotate": {
                  transform: "rotate(180deg)",
                  transition: "transform 0.3s ease",
                },
              }}
              variant="contained"
              startIcon={<AddIcon className="icon-rotate" />}
            >
              Add property
            </Button>

            <IconButton
              sx={{
                display: { md: "none" },
                color: "white",
                backgroundColor: "#00C194",
                marginLeft: "4px",
                marginRight: "4px",
                "&:hover": {
                  backgroundColor: "#00A47E",
                },
                height: "36px",
                width: "36px",
              }}
            >
              <AddIcon sx={{ height: "16px", width: "16px" }} />
            </IconButton>

            <IconButton
              sx={{ display: { md: "none" }, color: "white" }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              sx={{ overFlow: "auto" }}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "left", vertical: "top" }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} sx={{ width: "100vw" }}>
                  {page.page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
