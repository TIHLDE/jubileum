import Confetti from 'react-confetti'
import { TIHLDETimeline } from '../../components/Timeline/Timeline'
import { events } from '../../components/Timeline/events'



const HistoriePage = () => {
    return (
      <div>
        <TIHLDETimeline items={events} />
      </div>
    )
}

export default HistoriePage