import Achieve from './component/Achieve';
import ChartAndBoard from './component/ChartAndBoard';
import ChartBoard from './component/ChartBoard';
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
      <ChartAndBoard />
      <Achieve />
    </>
  )
}

export default App
