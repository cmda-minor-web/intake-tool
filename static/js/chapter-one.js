import { el } from './elements.js'

const tlChapterOne = gsap.timeline({ defaults: {duration: 1 } })

/* child timelines */

// Introduction
const tlIntro = () => {
  const tl = gsap.timeline({})
  
  tl.from(el.introTitle, .5, {opacity:0})
    .staggerFrom([el.introText, el.introCTA], .25, {opacity:0, y:'-2.5vh', stagger:.25})
  return tl 
}
// rocket
const tlRocket = () => {
  const tl = gsap.timeline({})
  
  tl.set(el.rocket, {xPercent:-20, yPercent:80, rotate:-20, transformOrigin:'50% 50%'})
    .to(el.rocket, 1, {opacity:1, onComplete:flames(true)}, '+=3')
    .to(el.rocket, 6, {xPercent:70, yPercent:45, scale:.1, rotate:-100, ease: 'elastic.out(.5, 0.3)'})
    
  return tl 
} 

// rocket flames
const tlRocketFlames = () => {
  const tl = gsap.timeline({repeat: -1, yoyo:true})

  tl.to(el.rocketFlames, .1, { opacity:0})
  
  return tl 
} 

// planet
const tlPlanet = () => {
  const tl = gsap.timeline({})
  
  tl.set(el.planet, {xPercent:100, x:'120%', scale: 0.15,  transformOrigin:'50% 0'})
    .to(el.planet, 1,  {opacity:1}, '+=2')
    .to(el.planet, 3,  {xPercent:10, yPercent:50, scale: 1, ease: 'elastic.out(1, 0.3)'})

  return tl 
}

/* main timeline */
export const chapterOne = () => {
  tlChapterOne
          .pause()
          .add(tlIntro(), .25)
          .add(tlPlanet(), .25)
          .add(tlRocket(), .5)

  return tlChapterOne;
}

/* Helper functions */

// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
// This is not working???
function flames(burning) {
  return function() {
    tlRocketFlames().paused(!burning);

    if(!burning) {
      tlRocketFlames().addPause(0);
    }
  }
}


