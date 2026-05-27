import Hero from './component/Hero';
import NavBar from './component/NavBar';
import WhatWeDo from './component/WhatWeDo';
// plugin ("daisyui");
// plugin("daisyui", require("daisyui"))

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WhatWeDo />
    </>
  )
}

export default App
