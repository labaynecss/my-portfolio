//  icons
import {
  AiOutlineFacebook,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'project',
    href: 'project',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <AiOutlineFacebook />,
    href: 'https://www.youtube.com/channel/UC6duY9-fOnOn42zHRlSaP-g',
    color: 'text-gray-800',
    colorHover: 'hover:text-[#6699CC]',
  },
  {
    icon: <AiFillInstagram />,
    href: 'https://twitter.com/GHarakis',
    color: 'text-gray-800',
    colorHover: 'hover:text-[#6699CC]',
  },
  {
    icon: <AiOutlineLinkedin />,
    href: 'https://github.com/harakisgeorge',
    color: 'text-gray-800',
    colorHover: 'hover:text-[#6699CC]',
  },
  {
    icon: <AiFillGithub />,
    href: 'https://www.linkedin.com/feed/',
    color: 'text-gray-800',
    colorHover: 'hover:text-[#6699CC]',
  },
];

export const sections = [
  {
    title: 'Backend Developer ',
    content:
      'I have experience developing backends using Express, Node.js, and SQL  and no-SQL databases.',
  },
  {
    title: 'Web Design ',
    content:
      'I have hands-on experience in web design, having worked on multiple projects to create visually captivating and user-friendly web-app.',
  },
  {
    title: 'Frontend Developer',
    content:
      'I am proficient in HTML, CSS, JavaScript, and React and have experience developing responsive and user-friendly web applications.',
  },
];
