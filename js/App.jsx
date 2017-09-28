import React, {Component} from 'react';
import * as Preloader from '../Preloaders';

import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';

import { heart } from 'react-icons-kit/icomoon/heart';

import { npm } from 'react-icons-kit/icomoon/npm';

class App extends Component {

    render() {
        return (
            <div className={'wrap'}>
                <Preloader.Lines color={'#f95759 '}/>
                <h1>React Preloaders</h1>
                <div className={'flex'}>
                    <div className={'code'}>
                        <p>Find this package in <a href="https://www.npmjs.com/package/react-preloaders"> <Icon icon={npm} /></a>  and read more in <a href="https://github.com/vamosgs/react-preloaders">  <Icon icon={github} /></a></p>
                    </div>
                    <div className={'list'}>
                        <ul>
                            <li><h3>Dots</h3><Preloader.Dots /> <p>import Dots from 'react-preloaders/Preloaders/Dots';</p></li>
                            <li><h3>Circle</h3><Preloader.Circle /> <p>import Circle from 'react-preloaders/Preloaders/Circle';</p></li>
                            <li><h3>Zoom</h3><Preloader.Zoom /> <p>import Zoom from 'react-preloaders/Preloaders/Zoom';</p></li>
                            <li><h3>Cube</h3><Preloader.Cube /> <p>import Cube from 'react-preloaders/Preloaders/Cube';</p></li>
                            <li><h3>Circle2</h3><Preloader.Circle2 /> <p>import Circle2 from 'react-preloaders/Preloaders/Circle2';</p></li>
                            <li><h3>Lines</h3><Preloader.Lines /> <p>import Lines from 'react-preloaders/Preloaders/Lines';</p></li>
                        </ul>
                    </div>
                    <div className={'code'}>
                        <p>Made with <Icon icon={heart} /> by <a href="https://github.com/vamosgs">Gegham Samvelyan(VamOSGS)</a></p>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;