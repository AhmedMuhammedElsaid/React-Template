import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SocialMedia from './Components/SocialMedia';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Work from './Components/Work'
import Profile from './Components/Profile'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route> <Navbar /></Route>
        <Home />
        <Work />
        <Profile />
        <Portfolio />
        <About />
        <Contact />
        <SocialMedia />
        <Footer />
      </BrowserRouter>

    )
  }
}