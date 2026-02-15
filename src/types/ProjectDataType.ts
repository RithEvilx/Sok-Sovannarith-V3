export type ProjectDataType = {
  image: string;
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo: string;
  story?: string;
  keyContributions?: { title: string; task: string }[];
};
