import { CutCornerButton } from "../components/CutCornerButton";

export const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl text-center mt-4">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400">
          Blockforge is poineering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
        <img src="/assets/images/icosahedron.png" alt="Icosahedron 3D Image" />
      </div>
    </section>
  );
};
