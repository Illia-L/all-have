import { Box, InputBase, useMediaQuery, useTheme } from "@mui/material";

export default function SearchBar() {
    const theme = useTheme();
            const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: {xs: 'none', md: '1px solid #ccc'},
                borderRadius: '16px',
                width: { md: '383px', lg: '284px'},
                height: '36px',
                // ml: { xs: '18px', lg:'56px'},
            }}
        >
            {!isMobile && (
            <InputBase placeholder="" sx={{ flex: 1, fontSize: '14px', pl: '16px', pr: '34px' }} />
        )}
            <Box
                component='span'
                sx={{ width: { xs: 44, md: 24 }, height: { xs: 44, md: 24 }, mr: {xs:'0', md:'16px'} }}
            >
                <svg style={{ width: '100%', height: '100%' }}>
                    <use href='/header-icons/sprite.svg#search' />
                </svg>
            </Box>
        </Box>
    );
}