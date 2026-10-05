export const LatestPosts = () => {
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center">
          Your portal to everything blockchain.
        </h2>
        <p className="text-xl text-center text-zinc-400 mt-8">
          Keep up with the newest trens, updates, and insights in the blockchain
          world, updated weekly.
        </p>
        <div className="m-16">
          {[...new Array(4)].fill(0).map((item, itemIndex) => (
            <div key={itemIndex}>
              <div>Technology</div>
              <h3>Regulatory Challenges Facing Blockchain</h3>
              <p>
                Understanding the regulatory landscape surrounding blockchain
                and what it means for the future of this Technology.
                <div>
                  <button>Read more</button>
                  <div>arrow</div>
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
