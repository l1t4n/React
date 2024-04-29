import { Typography } from "@mui/material";
import React from "react";

export const Footer = (props, children) => {
    return <footer className="footer">
        <Typography variant="body2" align="center">
          © 2024 Сайт о домашних питомцах. Все права защищены.
        </Typography>
    </footer>
}