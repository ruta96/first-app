import {useRef, useEffect} from 'react';
import './App.css';
import { ReactComponent as Scene } from './build.svg';
import gsap from 'gsap';
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function App() {
  const wrapper = useRef(null);

  useEffect(() => { 
    const [elements] = wrapper.current.children;

    const window = elements.getElementById('window');
    const buttons = elements.getElementById('buttons');
    const icons = elements.getElementById('icons');
    const man = elements.getElementById('man');
    const topbar = elements.getElementById('topbar');
    const womantop = elements.getElementById('womantop');
    const postimage = elements.getElementById('postimage');
    const armandchest = elements.getElementById('armandchest');
    const folder = elements.getElementById('folder');

    gsap.set([window, ...buttons.children, ...icons.children, man, topbar, womantop, postimage, armandchest, folder, ".text"], {autoAlpha: 0});
    gsap.set(["svg", ".text"], {visibility:"visible"});

    const tl = gsap.timeline({defaults: {ease: 'power1.inOut'}});

    tl.fromTo(window,{x: '-=300'},{duration: 1, x: '+=300', autoAlpha: 1})
    .fromTo(topbar,{x: "-=100"}, {duration: 1, x:'+=100', autoAlpha: 1})
    .fromTo(buttons.children, {scale: '1.5'},{duration: 1, scale: 1, autoAlpha: 1, stagger: 0.2})
    .fromTo(icons.children, {scale: '1.5'}, {duration: 0.5, scale: 1, autoAlpha: 1, stagger: 0.2})
    .fromTo(folder, {x: '-=50'}, {duration:1, x: '+=50', autoAlpha: 1})
    .fromTo([womantop,armandchest,man,postimage], {x: '+=50'}, {duration: 1, x: '-=50', autoAlpha: 1}, '-=1')
    .fromTo(postimage, {rotate: -15}, {duration: .5, rotate:0 , autoAlpha: 1})
    .fromTo(".text",{scale: 1.5, y: '+=100'},{duration: 1, scale: 1, autoAlpha: 1, y: '-=100'}, '-=2')
  }, []);

  return (
    <div ref={wrapper} className="App">
      <Scene />
      <div className='text'>In progress...</div>
    </div>
  );
}

export default App;
