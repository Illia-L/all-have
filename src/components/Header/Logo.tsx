import { Typography } from "@mui/material";

export default function Logo() {
    return (
        <Typography
            sx={{
                fontFamily: 'var(--font-inter)',
                fontWeight: '800',
                fontSize: {
                    xs: '24px',
                    md: '32px',
                },
                color: theme => theme.palette.custom.text2,
                textShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}>
            All Have
        </Typography>
    );
}