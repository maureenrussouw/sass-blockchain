import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import {
  getColorFromPositionCategory,
  getColorFromPositionType,
} from "../utils/postUtils";

type Position = {
  title: string;
  type: string;
  description: string;
  category: string;
  remote: boolean;
};

export const CareerPositions = ({ positions }: { positions: Position[] }) => (
  <div className="flex flex-col gap-12">
    {positions.map(({ title, type, description, category, remote }) => (
      <motion.a
        key={title}
        initial={{ opacity: 0.1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        href="/contact"
      >
        <Card
          color={getColorFromPositionCategory(category)}
          buttonText="Apply Now"
        >
          <div className="flex items-center gap-3">
            {remote && <Tag>Remote</Tag>}
            <Tag color={getColorFromPositionType(type)}>{type}</Tag>
          </div>
          <h2 className="text-3xl font-black font-heading mt-6">{title}</h2>
          <p className="text-xl text-zinc-400 mt-4">{description}</p>
        </Card>
      </motion.a>
    ))}
  </div>
);
