import { Box } from "@mui/material"
import { EVENT_URL } from "utility/constants/urls"

// Available fields: https://api.tihlde.org/events/489/?format=json
type EventInfo = {
  title: string
  location: string
  sign_up: string
  start_registration_at: Date
  end_registation_at: Date
}

export function Signup() {
  const event_id = 489 // Event ID for TIHLDE 30 years: 489

  fetch(EVENT_URL(event_id)).then((response) => {
    console.log(response)
  })

  return <Box></Box>
}
