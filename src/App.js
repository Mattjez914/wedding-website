import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/navigation/Navigation';
// import NavigationMDB from './components/navigation/NavigationMDB';
import FadeIn from './components/fade-in/FadeIn';
import SlideShow from './components/slide-show/SlideShow';
import Ceremony from './components/ceremony/Ceremony';
import Reception from './components/reception/Reception';

const App = () => {
  return (
    <div>
      <Navigation />
      <button disabled></button>

      <div>
        {/* <ParallaxProvider> */}
          {/* <FadeIn>
            <SlideShow />
          </FadeIn> */}
          <FadeIn>
            <Ceremony/>
          </FadeIn>
          {/* <FadeIn>
            <Reception/>
          </FadeIn> */}
        {/* </ParallaxProvider> */}
      </div>
    </div>
  );
}

export default App;
