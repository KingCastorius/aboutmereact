import React from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'react-fa'
import { Grid, Row, Cell } from 'react-inline-grid';
import Styles from './styles';
const coverImg = require('./ryan.jpg')






class Layout extends React.Component{
  render() {
    return (
      <span>
       <div style={Styles.bgColor}>
         {/*header*/}
        <Grid>
          <Row is="center">
            <Cell is="desktop-12 tablet-8 mobile-4">
              <div>
                <h1 style={Styles.pageHeader}>  
                  About Mr. Hale.
                </h1>
              </div>
            </Cell>
          </Row>
        </Grid>
        {/*blerb about me*/}
        <Grid>
          <Row is="center">
            <Cell is="desktop-3"></Cell>
            <Cell is="desktop-6 tablet-8 mobile-4">
              <p style={Styles.arial}>
                Hello my name is Ryan Hale, and I am a Junior Developer.
                 My technology stack is full stack JavaScript. 
                 I like to sing and I also have been drumming for 17 years.  
                 I have been working with technology since i was 12 years old, 
                 so now being a developer is an exciting new adventure!
              </p>
            </Cell>
            <Cell is="desktop-3"></Cell>
          </Row>
        </Grid>
        {/*image*/}
        <Grid>
          <Row is="center">
            <Cell is="desktop-12 tablet-8 mobile-4">
              <div style={Styles.pageHeader}>
                <img src={coverImg}/>
              </div>
            </Cell>
          </Row>
        </Grid>
        {/*link to projects*/}
        <Grid>
          <Row is="center">
            <Cell is="desktop-12 tablet-8 mobile-4">
              <div style={Styles.pageFooter}> 
                <a href="https://github.com/KingCastorius">
                  <Icon name='github' size='2x' className='icon' />
                </a>
                <a href="https://twitter.com/KingCastorius">
                  <Icon name='twitter' size='2x' className='icon'/>
                </a>
              </div>
            </Cell>
          </Row>
        </Grid>

       </div>

      </span>
    )
  }
}
 
ReactDOM.render(
	<Layout />, 
	document.getElementById('root')
);


