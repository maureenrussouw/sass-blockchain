import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { getPostColorFromCategory } from "../utils/postUtils";

type BlogPost = {
  id: string;
  category: string;
  title: string;
  description: string;
};

export const BlogPosts = ({ posts }: { posts: BlogPost[] }) => (
  <div className="container">
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-12">
        {posts.map(({ id, category, title, description }, postIndex) => (
          <motion.a
            key={id}
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            href={`/blog/${id}`}
            className={twMerge(postIndex % 2 === 0 ? "" : "hidden")}
          >
            <Card
              buttonText="Read More"
              color={getPostColorFromCategory(category)}
            >
              <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
              <h2 className="font-heading font-font-black text-3xl mt-4">
                {title}
              </h2>
              <p className="text-lg mt-6 text-zinc-400">{description}</p>
            </Card>
          </motion.a>
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-12 mt-24">
          {posts.map(({ id, category, title, description }, postIndex) => (
            <motion.a
              key={id}
              initial={{ opacity: 0.1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                duration: 0.5,
                ease: "easeIn",
              }}
              href={`/blog/${id}`}
              className={twMerge(postIndex % 2 === 0 ? "hidden" : "")}
            >
              <Card
                buttonText="Read More"
                color={getPostColorFromCategory(category)}
              >
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h2 className="font-heading font-font-black text-3xl mt-4">
                  {title}
                </h2>
                <p className="text-lg mt-6 text-zinc-400">{description}</p>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </div>
);
