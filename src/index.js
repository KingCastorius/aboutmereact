import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Cell } from 'react-inline-grid';
import Styles from './styles';



class Layout extends React.Component{
  render() {
    return (
      <span>
        <Grid>
          <Row is="center">
            <Cell is="desktop-12">
              <div>
                <h1 style={Styles.blue}>  
                  About Mr. Hale.
                </h1>
              </div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row is="center">
            <Cell is="desktop-12">
              <p style={Styles.red}>
                Hello my name is Ryan Hale, and I am a Junior Developer!.
              </p>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row is="center">
            <Cell is="desktop-12">
              <p style={Styles.green}>
                 I work with Full Stack JavaScript and im working on using React!
              </p>
            </Cell>
          </Row>
        </Grid>
      </span>
    )
  }
}
 
ReactDOM.render(
	<Layout />, 
	document.getElementById('root')
);


