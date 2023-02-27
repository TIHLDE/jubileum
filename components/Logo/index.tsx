import { Box } from "@mui/system"
import LogoSvg from "./Logo.svg"

export default function Logo({ ...props }) {
  return (
    <Box {...props}>
      <LogoSvg />
    </Box>
  )
}
