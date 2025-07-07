import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function CartButton() {
    const theme = useTheme();
    const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
            <Box
                component='span'
                sx={{ width: { xs: 44, md: 56, lg: 32 }, height: { xs: 44, md: 56, lg: 32 } }}
            >
                <svg style={{ width: '100%', height: '100%' }}>
                    <use href='/header-icons/sprite.svg#cart' />
                </svg>
            </Box>
            {!isTabletOrMobile && (
                <Typography
                    component='a'
                    sx={{
                    typography: {
                        lg: 'header1',
                    },
                    '&:hover': { color: theme => theme.palette.custom.text2 }
                }}>Кошик</Typography>
            )}
        </Box>
    );
}