import React, { Component } from 'react';
import { css } from 'glamor';
import Logo from './Logo';
import Globals from './utils/Globals';
import Pattern from './media/images/pattern.png';
import './App.css';

import Box from './Box';

css.global('html, body', { padding: 0 })
css.global('h5, span', { color: Globals.colors.primary, margin: 0})

const cont = css({
  background: `#161616 url(${Pattern})`,
  color: 'white',
  height: '100vh',
  width: '100%',
  minWidth: '100vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const head = css({
  alignSelf: 'flex-start',
  margin: '30px',
  textTransform: 'uppercase',
  textAlign: 'left',
})

const hr =css({
  borderTop: `3px solid ${Globals.colors.primary}`,
  width: 25,
  height: 1,
})

const logo = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const footer = css({
  alignSelf: 'flex-end',
  display: 'flex',
  '@media(max-width: 720px)': {
    alignSelf: 'auto',
  }
})

class App extends Component {
  render() {
    return (
      <div className={cont}>

          <div className={head}>
            <h1>REACT<span>CONF</span></h1>
            <div className={hr}></div>
            <h5>brasil 2017</h5>
          </div>

          <div className={logo}>
            <Logo/>
          </div>

          <div className={footer} >
            <Box>
              <h3>DATA</h3>
              <h2>05.10.2017</h2>
              <p>10:00am - 17:00pm</p>
            </Box>
            <Box>
              <h3>LOCAL</h3>
              <h2>São Paulo</h2>
              <p>Expo Center</p>
            </Box>
          </div>

      </div>
    );
  }
}

export default App;
