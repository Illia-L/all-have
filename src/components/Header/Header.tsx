'use client';

import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import BurgerButton from "./BurgerButton";


export default function Header() {
    const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('xs' ));
    // const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
    const isBurger = useMediaQuery(theme.breakpoints.down('lg'));
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <AppBar position="static" sx={{ backgroundColor: '#0A15AE' }}>
            <Toolbar
                disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100px',
                    ml: { xs: '14px', md: '32px', lg: '83px' },
                    mr: 'auto',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '18px', md: '22px' },
                    }}>
                    {isBurger && (<BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
                    )}
                    <Logo />
                    <Box sx={{
                        display: {
                            xs: 'flex',
                            md: 'flex',
                            lg:'none',
                        },
                        alignItems: 'center',
                        gap: {
                            xs: '18px',
                            md:'20',
                        },
                    }}>
                        <SearchBar />
                        <CartButton />
                        <LoginButton />
                    </Box>
                </Box>
                {!isBurger && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: '18px', md: '22px', lg: '56px' },
                            justifyContent: 'center',
                            flexGrow: 1,
                            ml: '60px',
                        }}>
                    <NavMenu />
                        <SearchBar />
                        </Box> 
                )}
                {!isBurger && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                            gap: { xs: '18px', md: '22px', lg: '56px' },
                            ml: '56px',
                    }}
                >
                        <CartButton />
                        <LoginButton />
                    </Box>
                   )}
            </Toolbar>
            {isBurger && isMenuOpen && (
                <MobileMenu onClick={toggleMenu} />
            )}
        </AppBar>
    );
}