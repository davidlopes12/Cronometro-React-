/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Laplist({ laps }) {
  return (
    <div className='timer-laps'>
      <h3>Voltas</h3>
      <ul>
        {laps.map((index, lap) => (
          <li key={index}>Volta {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  )
}

export default Laplist