import { AiFillApi } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import {
  SiCss3,
  SiDatabricks,
  SiExpress,
  SiGooglemaps,
  SiJavascript,
  SiJsonwebtokens,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';

const TechIcon = ({ tech, styles }) => {
  if (tech === 'css') return <SiCss3 className={styles} />;
  if (tech.includes('javascript')) return <SiJavascript className={styles} />;
  if (tech === 'react') return <SiReact className={styles} />;
  if (tech.includes('redux')) return <SiRedux className={styles} />;
  if (tech.includes('sass')) return <SiSass className={styles} />;
  if (tech.includes('material')) return <SiMaterialui className={styles} />;
  if (tech.includes('mongo')) return <SiMongodb className={styles} />;
  if (tech.includes('express')) return <SiExpress className={styles} />;
  if (tech.includes('next')) return <SiNextdotjs className={styles} />;
  if (tech.includes('tailwind')) return <SiTailwindcss className={styles} />;
  if (tech.includes('google')) return <SiGooglemaps className={styles} />;
  if (tech.includes('rest')) return <AiFillApi className={styles} />;
  if (tech.includes('router')) return <SiReactrouter className={styles} />;
  if (tech.includes('token')) return <SiJsonwebtokens className={styles} />;
  if (tech.includes('cms')) return <SiDatabricks className={styles} />;
  if (tech.includes('seo')) return <FaSearch className={styles} />;
};

export default TechIcon;
