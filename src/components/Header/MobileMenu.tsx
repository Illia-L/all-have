import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
// ... підключи потрібні SVG-іконки

type Props = {
  onClick: () => void;
};

export default function MobileMenu({ onClick }: Props) {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100vh',
                bgcolor: 'white',
                zIndex: 1000,
                p: '20px',
                color: '#0A15AE'
            }}
        >
            {/* Верхня частина */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: '20px',
                }}
            >
                <Typography>
                    All Have
                </Typography>

                
                <button onClick={onClick}>x</button>
            </Box>

            {/* Ряд з "Київ" і "Увійти" */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: '16px',
                    px: '4px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LocationOnIcon />
                    <Typography>Київ</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <PersonIcon />
                    <Typography>Увійти</Typography>
                </Box>
            </Box>

            {/* Список посилань */}
            <List>
                {[
                    'Каталог товарів',
                    'Обране',
                    'Кошик',
                    'Популярні товари',
                    'Всі акції',
                    'Доставка',
                    'Повернення',
                    'Про магазин',
                    'Контакти',
                ].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton>
                            {/* Іконки можна вставити умовно або через спрайт */}
                            <ListItemIcon>*</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}