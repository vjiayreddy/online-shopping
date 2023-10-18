"use client";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledSlideBox = styled(Box)(({ theme }) => ({
  minHeight: 400,
  width: "100%",
  position: "relative",
  backgroundColor: theme.palette.primary.dark,
  borderRadius: 10,
  overflow: "hidden",
  [theme.breakpoints.only("xs")]: {
    minHeight: 200,
  },
}));

interface HomeSwiperSlideComponentProps {
  imgUrl: string;
}

const HomeSwiperSlideComponent = ({
  imgUrl,
}: HomeSwiperSlideComponentProps) => {
  return (
    <StyledSlideBox>
      <Image
        alt=""
        src={imgUrl}
        fill
        objectFit="cover"
        sizes="(max-width:786px) 100vw, (max-width:1200) 50vw, 33vw"
      />
    </StyledSlideBox>
  );
};

export default HomeSwiperSlideComponent;
