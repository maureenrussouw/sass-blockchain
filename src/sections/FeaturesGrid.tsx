import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  { id: "1", desc: "Experience unparalled security and scalability" },
  { id: "2", desc: "Fully benefit from scalable network effects" },
  { id: "3", desc: "Unlock the potential of decentralized networks" },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div>
          <h2 className="font-heading font-black text-4xl">
            Empowing the future of blockchain.
          </h2>
          <p className="text-xl text-zinc-400 mt-8">
            Blockforge provides robust and secure infrastucture to support the
            next generation of decntralized applictions.
          </p>
          <ul className="flex flex-col gap-8 mt-12">
            {listItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <div className="inline-flex shrink-0 justify-center items-center size-8  outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10">
                  <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                </div>
                <span className="text-xl font-bold">{item.desc}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-8 mt-12">
            <CutCornerButton>Get started</CutCornerButton>
            <TextButton>Learn More</TextButton>
          </div>
        </div>
      </div>
    </section>
  );
};
