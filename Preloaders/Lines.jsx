import React, {Component} from 'react';
import '../Styles/css/Lines.css';

class Lines extends Component {
  componentDidMount() {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                setTimeout(() => {
                   document.getElementById('preloader').classList.add('close')
                }, this.props.time)
            }
        }
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.bgColor}} ref={'preload'} id={'preloader'}>
                    <div id="loader">
                      <ul>
                        <li style={{backgroundColor: this.props.color}} ></li>
                        <li style={{backgroundColor: this.props.color}} ></li>
                        <li style={{backgroundColor: this.props.color}} ></li>
                        <li style={{backgroundColor: this.props.color}} ></li>
                        <li style={{backgroundColor: this.props.color}} ></li>
                        <li style={{backgroundColor: this.props.color}} ></li>
                      </ul>
                    </div>
            </div>
        )
    }
}

Lines.defaultProps = {time: 1600, bgColor: '#f7f7f7', color: '#2D2D2D'};

export default Lines;