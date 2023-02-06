import React, { useState } from "react";

// Material
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Assets
import { ROUTES } from "../../utility/constants/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import TihldeLogo from "../TihldeLogo/TihldeLogo";

const menu = [
  {
    link: ROUTES.HISTORY,
    label: "Historie",
  },
  {
    link: ROUTES.DALJER,
    label: "Tihlde daljer",
  },
  {
    link: ROUTES.TODDEL,
    label: "Tøddel",
  },
  {
    link: ROUTES.MERCH,
    label: "Merch",
  },
];

export const Header: React.FunctionComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={0}
        style={{
          transition: "background-color 0.25s",
          backgroundColor: "black",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <Toolbar disableGutters>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            maxWidth="xl"
          >
            <MuiLink component={Link} href="/" onClick={toggleDrawer(false)}>
              <TihldeLogo
                size="large"
                logoColor="white"
                sx={{ height: 30, width: "auto" }}
              />
            </MuiLink>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="row"
              justifyContent="center"
            >
              {menu.map((item, i) => (
                <Button
                  key={i}
                  component={Link}
                  href={item.link}
                  style={{
                    textAlign: "center",
                    color: "white",
                    ...(router.pathname == item.link
                      ? {
                          fontWeight: 600,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderBottom: "2px solid white",
                        }
                      : {}),
                  }}
                >
                  {item.label}
                  {item.label == "Tøddel" && (
                    <OpenInNewIcon sx={{ ml: 1 }} fontSize="small" />
                  )}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="row"
              justifyContent="end"
              alignItems="center"
            >
              <Button
                variant="outlined"
                href="https://tihlde.org/"
                target="_blank"
                color="info"
              >
                tihlde.org
                <OpenInNewIcon sx={{ ml: 1 }} fontSize="small" />
              </Button>
            </Box>
            <Box
              sx={{ display: { xs: "flex", md: "none" } }}
              flexDirection="row"
              justifyContent="end"
            >
              <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                color="info"
                sx={{ mr: -1.5 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { backgroundColor: "black" } }}
        >
          <Container sx={{ width: 250, p: 2 }}>
            <Box
              flexDirection="column"
              sx={{ display: { xs: "flex", md: "none" } }}
              alignItems="end"
              style={{
                transition: "height 0.25s",
                overflow: "hidden",
              }}
            >
              {menu.map((item, i) => (
                <Button
                  key={i}
                  color="info"
                  onClick={toggleDrawer(false)}
                  component={Link}
                  href={item.link}
                  style={
                    router.pathname == item.link
                      ? {
                          fontWeight: 600,
                          color: "white",
                          borderBottomRightRadius: 0,
                          borderTopRightRadius: 0,
                          borderRight: "2px solid white",
                        }
                      : {}
                  }
                >
                  {item.label}
                </Button>
              ))}
              <Button
                href="https://tihlde.org/"
                target="_blank"
                color="info"
                onClick={toggleDrawer(false)}
              >
                tihlde.org
                <OpenInNewIcon sx={{ ml: 1 }} fontSize="small" />
              </Button>
            </Box>
          </Container>
        </Drawer>
      </AppBar>
    </React.Fragment>
  );
};
