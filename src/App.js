import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { Player } from './components/Player';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} /> //CRIA O CEU e a possição do sol, deixando sempre dia
        <ambientLight intesity={0.5}/> //Define a intensidade da luz ambiente

        <Physics>
          <Player />
          <Ground />
        </Physics>

      </Canvas>
    </>
  );
}

export default App;
