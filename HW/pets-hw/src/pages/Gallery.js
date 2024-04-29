import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import "./Gallery.css";

const itemData = [
    {
       src: '../../public/images/img1.png',
       title: 'dog1'
    },
    {
       src: '../../public/images/img2.png',
       title: 'dog2'
    },
    {
       src: '../../public/images/img3.png',
       title: 'dog3'
    },
    {
       src: '../../public/images/img4.png',
       title: 'dog4'
    },
    {
       src: '../../public/images/img5.png',
       title: 'dog5'
    },
    {
       src: "../../public/images/img6.png",
       title: 'dog6'
    }
   ]

export const Gallery = () => {
    return <div className="gallery">
        <Box sx={{ width: 1000, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.src}>
            <img
              srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
}

