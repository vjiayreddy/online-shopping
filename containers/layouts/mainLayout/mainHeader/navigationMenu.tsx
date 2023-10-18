'use client';
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductMenuComponent from "./productMenu";

const pages = ["Products", "Pricing", "Blog"];

const StyledTabsList = styled(Tabs)(({ theme }) => ({
  minHeight: 62,
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
const StyledTab = styled(Tab)<{ ref?: React.Ref<HTMLDivElement> }>(() => ({
  minHeight: 62,
  fontWeight: 500,
  fontSize: 16,
}));

const NavigationMenuComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const [open, setOpen] = React.useState(false);
  //   const appBarZindexValue = useReactiveVar(appBarZindexVar);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <StyledTabsList
        value={tabIndex}
        onChange={(_, value) => setTabIndex(value)}
      >
        <StyledTab value="0" label="Home" />
        <StyledTab
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "products-menu" : undefined}
          ref={anchorRef}
          value="1"
          label="Products"
          onClick={handleToggle}
        />
        <StyledTab value="2" label="Abous Us" />
        <StyledTab value="3" label="Contact Us" />
      </StyledTabsList>

      <ProductMenuComponent
        handleClose={handleClose}
        open={open}
        menus={[]}
        zIndex={null}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </>
  );
};

export default NavigationMenuComponent;
