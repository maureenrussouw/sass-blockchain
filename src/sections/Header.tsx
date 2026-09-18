import { div } from "framer-motion/client";

export const HeaderSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between">
          <div>
            <img src="/assets/images/logo.svg" alt="Blockforge Logo" />
          </div>
          <div>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/5">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>

              <div className="size-10 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/5">
                  <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
