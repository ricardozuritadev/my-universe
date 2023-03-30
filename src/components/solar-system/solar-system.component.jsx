const SolarSystem = () => {
  return (
    <group position-y={1} rotation={[0.4, 0, 0.2]}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh position={[0, 0, 6]}>
        <sphereGeometry />
        <meshStandardMaterial color="yellowgreen" />
      </mesh>

      <mesh position={[8, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[-7, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[0, 0, -9]}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </group>
  );
};

export default SolarSystem;
