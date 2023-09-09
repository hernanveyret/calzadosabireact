import React from 'react';
import '../estilos/cards.css'

class Numeracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
   
    const { inicial, final } = this.props;
    const options = [];
    for (let i = inicial; i <= final; i++) {
      options.push(i);
    }
    this.setState({ options });
  }

  render() {
    return (
      <div>
        
        <select id="selectDinamico">
          {
            this.state.options.map((option) => (            
            <option key={option} value={option}>{option}</option>
        ))}
        </select>
      </div>
    );
  }
}

export default Numeracion;
