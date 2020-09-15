import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageSection from './components/image-section/ImageSection';
import cover from './images/cover.jpeg';
import sky from './images/sky.jpeg';
import tent from './images/tent.jpeg';

const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const textHomeStyle = {
  color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(40px + (70 - 40) * ((100vw - 300px) / (1600 - 300)))',
  position: 'absolute',
  right: '30px',
  bottom: '10px',
  zIndex: 2
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
                <ImageSection image={cover} height={this.state.relHeight}><div style={textHomeStyle}>M &amp; B</div></ImageSection>
              </Route>
              <Route path="/ceremony">
                <ImageSection image={sky} height={this.state.relHeight} />
              </Route>
              <Route path="/reception">
                <ImageSection image={tent} height={this.state.relHeight}/>
              </Route>
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
