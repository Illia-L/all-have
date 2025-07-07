import { IconButton } from "@mui/material";

type Props = {
    isOpen: boolean;
    onClick: () => void;
}

export default function BurgerButton({isOpen, onClick}: Props) {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                width: { xs: 44, md: 56 },
                height: { xs: 44, md: 56 },
                p: {xs: '10px', md: '16px'},
            }}
        >
            <svg width='100%' height='100%' >
                <use href={`/header-icons/sprite.svg#${isOpen ? 'close' : 'burger'}`} />
            </svg>
        </IconButton>
    );
}