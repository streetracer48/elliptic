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
            {/* <p>
            Home Working desk favorite Sipder man Marvel ps all that inspired me to learn more and create new things!
              </p> */}
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/js.jpg')}/>
              <LifeHeader>Got chances to speak about jest enzyme at office</LifeHeader>
            </a>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/tt.jpg')}/>
              <LifeHeader>Love to play TT at office</LifeHeader>
            </a>
            <p>Move your allegiance from your mind to your heart and everything opens up.</p>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/nature.jpg')}/>
              <LifeHeader>Nature-loving at Heart</LifeHeader>
            </a>
    <LifeProjectBlurb> Nature always wears the colors of the spirit. </LifeProjectBlurb>
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/csit2.jpg')}/>
              <LifeHeader> Some time we eat together </LifeHeader>
            </a>
            <p>"Unity is strength. . . when there is teamwork and collaboration, wonderful things can be achieved." --Mattie Stepanek</p>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>



          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/csit.jpg')}/>
              <LifeHeader>Life at CSIT</LifeHeader>
            </a>
            <p>“First, solve the problem. Then, write the code.” – John Johnson</p>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>

        <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour6.png')}/>
              <LifeHeader>Colourful Delhi streets</LifeHeader>
            </a>
           
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
              <LifeThumbnail src={require('../assets/winningmoment.jpg')}/>
              <LifeHeader>crazy funny moment and memorial Day back 2015  </LifeHeader>
            </a>
    <LifeProjectBlurb> The moment  when my leading team  fci  won 
Regional NHSPC programming contest , I still missing the  moment </LifeProjectBlurb>
          </div>
         
        </LifeRow>
        {/*Row 2*/}
        
      </div>
    );
  }
}

export default Life;
