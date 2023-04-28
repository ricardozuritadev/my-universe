import { useControls } from 'leva';

import Sun from '../sun/sun';
import SkillsPlanet from '../planets/skills-planet';
import ExperiencePLanet from '../planets/experience-planet';
import StudiesPlanet from '../planets/studies-planet';
import AboutPlanet from '../planets/about-planet';

const SolarSystem = () => {
  const { position, rotation } = useControls('Solar system', {
    position: {
      name: 'Position Y',
      value: {
        x: 0,
        y: 2,
        z: -10,
      },
    },
    rotation: {
      name: 'Rotation',
      value: {
        x: 0.45,
        y: 0.1,
        z: 0.15,
      },
    },
  });

  return (
    <group
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <Sun />
      <SkillsPlanet />
      <ExperiencePLanet />
      <StudiesPlanet />
      <AboutPlanet />
    </group>
  );
};

export default SolarSystem;
