import React, { Component } from 'react';
import { css } from 'glamor';
import Globals from './utils/Globals';

const cont = css({
  borderTop: `3px solid ${Globals.colors.primary}`,
  textAlign: 'left',
  margin: '30px',
  textTransform: 'uppercase',
  '> h3, p': { color: Globals.colors.primary, margin: 0 },
  '> p': { color: Globals.colors.primary },
  '> h2': { margin: 0 },
  '@media(max-width: 720px)': {
    margin: '5px',
  }
})

export default class Box extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={cont}>
        {children}
      </div>
    );
  }
}
