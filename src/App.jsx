import { useControls } from 'leva';

import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Perf } from 'r3f-perf';
import { PerspectiveCamera } from '@react-three/drei';

import Universe from './components/universe/universe';
import WelcomePage from './pages/welcome-page/welcome-page';

const App = () => {
  const { perfPanel } = useControls({
    perfPanel: {
      name: 'Show performance panel',
      value: true,
    },
  });

  return (
    <>
      <Leva collapsed />
      <WelcomePage />
      <Canvas>
        {perfPanel && <Perf position="top-left" />}
        <PerspectiveCamera
          makeDefault
          position={[-1, -1, 15]}
          fov={45}
          near={1}
          far={160}
        />
        <Universe />
      </Canvas>
    </>
  );
};

export default App;
