import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { EVENT_URL } from "utility/constants/urls"

// Available fields: https://api.tihlde.org/events/489/?format=json
type EventInfo = {
  title: string
  location: string
  sign_up: boolean
  start_registration_at: Date
  end_registation_at: Date
}

export function Signup() {
  const event_id = 489 // Event ID for TIHLDE 30 years: 489
  const [event, setEvent] = useState<EventInfo | null>(null)

  // Get event info and insert data into state
  fetch(EVENT_URL(event_id)).then((response) => {
    response.json().then((json) => {
      setEvent(json as EventInfo)
    })
  })

  return (
    <Box>
      {event && (
        <Box>
          <Typography>{event.title}</Typography>
          <Typography>Sted: {event.location}</Typography>
          <Button variant="contained" disabled={!event.sign_up}>
            Meld deg på
          </Button>
        </Box>
      )}
    </Box>
  )
}
