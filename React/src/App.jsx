import LearningUseState from './components/UseState.jsx';
import { Timer, UserList } from './components/UseEffect.jsx';
import Greeting from './components/Props.jsx'
import ToggleMessage from './components/ConditionalRendering.js';

export default function App(){
  return(
    <>
      <LearningUseState/>
      <Timer/>
      <UserList/>
      <Greeting name = "React"/>
      <ToggleMessage/>
    </>
  );
}
