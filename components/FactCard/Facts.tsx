import FactCard from "./FactCard";
import { Box } from '@mui/material';

const FaktaPage = () => {
    return (
        <Box sx={{ display: 'flex', overflowX: 'auto' }}>
            <FactCard />
            <FactCard />
            <FactCard />
            <FactCard />
            <FactCard />
            <FactCard />
        </Box>
    )
}

export default FaktaPage