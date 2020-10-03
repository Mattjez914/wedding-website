import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Ceremony from './components/ceremony/Ceremony';
import Navigation from './components/navigation/Navigation';
import ImageSection from './components/image-section/ImageSection';
import cover from './images/cover.jpeg';
import sky from './images/sky.jpeg';
import tent from './images/tent.jpeg';
import ring from './images/ring.jpeg';
import Reception from './components/reception/Reception';
import ComingSoon from './components/coming-soon/ComingSoon';
import Rsvp from './components/rsvp/Rsvp';

const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.state = {relHeight: 80, timeout: null};
  }

  calculateBodyHeight() {
    let navHeight = this.navRef.current.clientHeight;
    let windowHeight = getHeight();
    console.log(100-Math.floor((navHeight/windowHeight)*100));
    return 100-Math.floor((navHeight/windowHeight)*100)
  }

  resizeListener = () => {
    clearTimeout(this.state.timeout);
    this.setState({timeout: setTimeout(() =>  this.setState({relHeight: this.calculateBodyHeight()}), 150)})
  }

  componentDidMount() {
    this.setState({relHeight: this.calculateBodyHeight()});
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

  // const navigationEl = useRef(null);

  // useEffect(() => {
  //   let timeoutId = null;
  //   const resizeListener = () => {
  //     let navHeight = navigationEl.current;
  //     console.log(navHeight);
      // clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => setRelHeight(getHeight()), 150);
  //   };

  //   window.addEventListener('resize', resizeListener);

  //   return () => {
  //     window.removeEventListener('resize', resizeListener)
  //   }
  // },[])
  render() {
    return (
      <Router>
        <div style={{height: "100vh", overflow: "hidden"}}>
          <Navigation ref={this.navRef}/>
          <Switch>
            {/* <ParallaxProvider> */}
              {/* <FadeIn>
                <SlideShow />
              </FadeIn> */}
              <Route exact path="/">
                {/* <h1>{this.state.relHeight}</h1> */}
                <ImageSection image={cover} height={this.state.relHeight}>
                  <Home />
                </ImageSection>
              </Route>
              <Route path="/ceremony">
                <ImageSection image={sky} height={this.state.relHeight}>
                  <Ceremony />
                </ImageSection>
              </Route>
              <Route path="/reception">
                <ImageSection image={tent} height={this.state.relHeight}>
                  <Reception />
                </ImageSection>
              </Route>
              <Route path="/accommodations">
                <ImageSection image={ring} height={this.state.relHeight}>
                  <ComingSoon />
                </ImageSection>
              </Route>
              <Route path="/registry">
                <ImageSection image={ring} height={this.state.relHeight}>
                  <ComingSoon />
                </ImageSection>
              </Route>
              <Route path="/rsvp">
                <ImageSection image={ring} height={this.state.relHeight}>
                  <Rsvp />
                </ImageSection>
              </Route>
              <Route component={NoMatchPage} />
              {/* <FadeIn>
                <Reception/>
              </FadeIn> */}
            {/* </ParallaxProvider> */}
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
