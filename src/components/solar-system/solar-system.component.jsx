import Sun from '../sun/sun';
import SkillsPlanet from '../planets/skills-planet';
import ExperiencePLanet from '../planets/experience-planet';
import StudiesPlanet from '../planets/studies-planet';
import AboutPlanet from '../planets/about-planet';

const SolarSystem = () => {
  return (
    <group position-y={1} rotation={[0.4, 0, 0.2]}>
      <Sun />
      <SkillsPlanet />
      <ExperiencePLanet />
      <StudiesPlanet />
      <AboutPlanet />
    </group>
  );
};

export default SolarSystem;
