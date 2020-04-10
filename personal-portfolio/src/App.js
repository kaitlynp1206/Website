import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div style={{ height: '800px', position: 'relative' }}>
      <Layout fixedHeader fixedDrawer>
        <Header 
          className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Kaitlyn Paglia</Link>} scroll>
          <Textfield value="" onChange={() => { }} label="Search" expandable expandableIcon="search"/>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Kaitlyn Paglia</Link>}>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      </Layout>
    </div>
    );
  }
}

export default App;
