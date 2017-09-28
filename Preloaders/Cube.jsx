import React, {Component} from 'react';
import '../Styles/css/Cube.css';
class Cube extends Component {
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
                <span style={{borderColor: this.props.color}} className="loader">
                    <span style={{backgroundColor: this.props.color}} className="loader-inner"></span>
                </span>
            </div>
        )
    }
}

Cube.defaultProps = {time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D'};

export default Cube;