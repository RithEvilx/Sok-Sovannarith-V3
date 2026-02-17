import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, []);

  return <div>Coming Soon</div>;
};

export default Resume;
