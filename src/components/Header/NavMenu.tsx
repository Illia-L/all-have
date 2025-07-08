import { Box, Typography } from "@mui/material";
import Link from "next/link";

const links = [
    { label: 'Каталог товарів', href: '/catalog' },
    { label: 'Головна', href: '/' },
    { label: 'Про нас', href: '/about' },
    { label: 'Контакти', href: '/contacts' },
];

export default function NavMenu() {
    return (
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '44px', }}>
            {links.map(({ label, href }) => (
                <Link key={href} href={href} passHref>
                    <Typography
                        component='a'
                        sx={{
                            textDecoration: 'none',
                            typography: {
                                lg: 'header1',
                            },
                            '&:hover': { color: theme => theme.palette.custom.text2 }
                        }}
                    >
                        {label}
                    </Typography>
                </Link>
            ))}
        </Box>
    );
}