import { Typography } from '@mui/material';
import styles from './CountdownNumber.module.css';

type CountdownNumberProps = {
  value: number;
  appendix: string;
};

export const CountdownNumber = (props: CountdownNumberProps) => {
  return (
    <div className={styles.countdownNumber}>
      <Typography fontSize={20} fontWeight={600} className={styles.value}>
        {props.value}
      </Typography>
      <Typography
        fontSize={20}
        fontWeight={600}
        color={'primary'}
        className={styles.appendix}
      >
        {props.appendix}
      </Typography>
    </div>
  );
};
