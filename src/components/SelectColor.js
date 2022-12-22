import PropTypes from 'prop-types'; 

const SelectColor = (props) => {

  return (
    <div>
      <button onClick={() => props.onSelectColor(props.sender, 'red')}>❤️</button>
      <button onClick={() => props.onSelectColor(props.sender, 'orange')}>🧡</button>
      <button onClick={() => props.onSelectColor(props.sender, 'yellow')}>💛</button>
      <button onClick={() => props.onSelectColor(props.sender, 'green')}>💚</button>
      <button onClick={() => props.onSelectColor(props.sender, 'blue')}>💙</button>
      <button onClick={() => props.onSelectColor(props.sender, 'purple')}>💜</button>
    </div> 
  )

};

SelectColor.propTypes = {
  sender: PropTypes.string.isRequired,
  onSelectColor: PropTypes.func.isRequired
}
export default SelectColor;