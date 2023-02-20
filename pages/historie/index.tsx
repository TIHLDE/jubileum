import { Typography } from '@mui/material';
import { ScrollyTeller } from '../../components/ScrollyTelling/ScrollyTeller';

// NOTE: paddingTop: '4rem' is to displace the page, to account for the
// header that is 4rem tall.

const HistoriePage = () => {
  return (
    <div
      style={{
        paddingTop: '4rem',
      }}
    >
      <ScrollyTeller />
    </div>
  );
};

export default HistoriePage;
