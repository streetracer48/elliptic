import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I like to trvales, regardless of photography. Here are some of my  life </CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">

        <div className="col-md-6 col-sm-12">
        <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/desk.jpg')}/>
              <LifeHeader>Home loving my  working desk :)  </LifeHeader>
            </a>
            <p>
            Home Working desk favorite Sipder man Marvel ps all that inspired me to learn more and create new things!
              </p>
          </div>

        <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour6.png')}/>
              <LifeHeader>Colourful Delhi streets</LifeHeader>
            </a>
            <p>Move your allegiance from your mind to your heart and everything opens up.</p>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>
      
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour4.png')}/>
              <LifeHeader>Colourful Lodhi area streets</LifeHeader>
            </a>
            <p>I love take a picture in street, because street art makes the world a better place.</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour5.jpeg')}/>
              <LifeHeader>Beautiful new delhi </LifeHeader>
            </a>
            <LifeProjectBlurb>I've missed the place of purpose I found in chalking this photo </LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour3.png')}/>
              <LifeHeader>That is something what really like</LifeHeader>
            </a>
            <LifeProjectBlurb> Not just a road it's Runway and art gallery.</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/fly.jpg')}/>
              <LifeHeader>Nijhum Dwip tour 2016</LifeHeader>
            </a>
            <LifeProjectBlurb>Nijhum Dwip is a small beautiful island under Hatiya upazila. It is situated in Noakhali District in Bangladesh.</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/winningmoment.jpg')}/>
              <LifeHeader>crazy funny moment and memorialDay 2015 :)  </LifeHeader>
            </a>
    <LifeProjectBlurb> that moment when my leading team  fci  wining 
Regional NHSPC programming contest , i missed lot that moment </LifeProjectBlurb>
          </div>
        </LifeRow>
        {/*Row 2*/}
        
      </div>
    );
  }
}

export default Life;
