import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { iosCopyOutline } from 'react-icons-kit/ionicons/iosCopyOutline';
import Icon from 'react-icons-kit';
import { Circle, Zoom, Cube, Circle2, Lines, Dots } from '../../Preloaders';

const preloaders = [
  { label: 'Dots', render: <Dots /> },
  { label: 'Circle', render: <Circle /> },
  { label: 'Zoom', render: <Zoom /> },
  { label: 'Cube', render: <Cube /> },
  { label: 'Circle2', render: <Circle2 /> },
  { label: 'Lines', render: <Lines /> },
];
export default class List extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          {preloaders.map((item, key) => (
            <li key={key}>
              <h3>{item.label}</h3>
              {item.render}
              <div className="info">
                <p>
                  import {'{'}
                  {item.label}
                  {'}'} from 'react-preloaders';
                </p>
                <CopyToClipboard text={`import {${item.label}} from 'react-preloaders';`}>
                  <Icon icon={iosCopyOutline} />
                </CopyToClipboard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
