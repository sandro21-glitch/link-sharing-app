import GitHubLogo from "/assets/images/icon-github.svg";
import GitHubLogoWhite from "/assets/images/icon-github-link-box.svg";
import YouTubeLogo from "/assets/images/icon-youtube.svg";
import YouTubeLogoWhit from "/assets/images/icon-youtube-link-box.svg";
import TwitterLogo from "/assets/images/icon-twitter.svg";
import TwitterLogoWhite from "/assets/images/icon-twitter-link-box.svg";
import LinkedInLogo from "/assets/images/icon-linkedin.svg";
import LinkedInLogoWhite from "/assets/images/icon-linkedin-link-box.svg";
import FacebookLogo from "/assets/images/icon-facebook.svg";
import FacebookLogoWhite from "/assets/images/icon-facebook-link-box.svg";
import FrontendMentorLogo from "/assets/images/icon-frontend-mentor.svg";
import FrontendMentorLogoWhite from "/assets/images/icon-frontend-mentor-link-box.svg";
import TwitchLogo from "/assets/images/icon-twitch.svg";
import TwitchLogoWhite from "/assets/images/icon-twitch-link-box.svg";
import DevtoLogo from "/assets/images/icon-devto.svg";
import DevtoLogoWhite from "/assets/images/icon-devto-link-box.svg";
import CodewarsLogo from "/assets/images/icon-codewars.svg";
import CodewarsLogoWhite from "/assets/images/icon-codewars-link-box.svg";
import CodepenLogo from "/assets/images/icon-codepen.svg";
import CodepenLogoWhite from "/assets/images/icon-codepen-link-box.svg";
import FreeCodeCampLogo from "/assets/images/icon-freecodecamp.svg";
import FreeCodeCampLogoWhite from "/assets/images/icon-freecodecamp-link-box.svg";
import GitLabLogo from "/assets/images/icon-gitlab.svg";
import GitLabLogoWhite from "/assets/images/icon-gitlab-link-box.svg";
import HashNodeLogo from "/assets/images/icon-hashnode.svg";
import HashNodeLogoWhite from "/assets/images/icon-hashnode-link-box.svg";
import StackOverflowLogo from "/assets/images/icon-stack-overflow.svg";
import StackOverflowLogoWhite from "/assets/images/icon-stack-overflow-link-box.svg";
type LinksTypes = {
  id: number;
  name: string;
  placeholderUrl: string;
  logo: string;
  logoWhite: string;
  color: string;
  validation: RegExp;
}[];
export const LINK_SITES: LinksTypes = [
  {
    id: 1,
    name: "GitHub",
    placeholderUrl: "https://www.github.com/johnappleseed",
    logo: GitHubLogo,
    logoWhite: GitHubLogoWhite,
    color: "hsl(0, 0%, 1.5686274509803921%)",
    validation: /(https:\/\/)?(www\.)?github\.com\/[\w\-\/]*/,
  },
  {
    id: 2,
    name: "YouTube",
    placeholderUrl: "https://www.youtube.com/johnappleseed",
    logo: YouTubeLogo,
    logoWhite: YouTubeLogoWhit,
    color: "hsl(0, 84%, 58%)",
    validation: /(https:\/\/)?(www\.)?youtube\.com\/.*/,
  },
  {
    id: 3,
    name: "Twitter",
    placeholderUrl: "https://www.twitter.com/johnappleseed",
    logo: TwitterLogo,
    logoWhite: TwitterLogoWhite,
    color: "hsl(198, 79%, 59%)",
    validation: /(https:\/\/)?(www\.)?twitter\.com\/[\w\-\/]*/,
  },
  {
    id: 4,
    name: "LinkedIn",
    placeholderUrl: "https://www.linkedin.com/johnappleseed",
    logo: LinkedInLogo,
    logoWhite: LinkedInLogoWhite,
    color: "hsl(223, 100%, 59%)",
    validation: /(https:\/\/)?(www\.)?linkedin\.com\/[\w\-\/]*/,
  },
  {
    id: 5,
    name: "Facebook",
    placeholderUrl: "https://www.facebook.com/johnappleseed",
    logo: FacebookLogo,
    logoWhite: FacebookLogoWhite,
    color: "hsl(227, 66%, 41%)",
    validation: /(https:\/\/)?(www\.)?facebook\.com\/[\w\-\/]*/,
  },
  {
    id: 6,
    name: "Frontend Mentor",
    placeholderUrl: "https://www.frontendmentor.io/johnappleseed",
    logo: FrontendMentorLogo,
    logoWhite: FrontendMentorLogoWhite,
    color: "hsl(0, 0%, 100%)",
    validation: /(https:\/\/)?(www\.)?frontendmentor\.io\/[\w\-\/]*/,
  },
  {
    id: 7,
    name: "Twitch",
    placeholderUrl: "https://www.twitch.tv/johnappleseed",
    logo: TwitchLogo,
    logoWhite: TwitchLogoWhite,
    color: "hsl(313, 84%, 59%)",
    validation: /(https:\/\/)?(www\.)?twitch\.tv\/[\w\-\/]*/,
  },
  {
    id: 8,
    name: "Dev.to",
    placeholderUrl: "https://dev.to/johnappleseed",
    logo: DevtoLogo,
    logoWhite: DevtoLogoWhite,
    color: "hsl(0, 0%, 20%)",
    validation: /(https:\/\/)?(www\.)?dev\.to\/[\w\-\/]*/,
  },
  {
    id: 9,
    name: "Codewars",
    placeholderUrl: "https://www.codewars.com/users/johnappleseed",
    logo: CodewarsLogo,
    logoWhite: CodewarsLogoWhite,
    color: "hsl(331, 68%, 32%)",
    validation: /(https:\/\/)?(www\.)?codewars\.com\/users\/[\w\-\/]*/,
  },
  {
    id: 10,
    name: "Codepen",
    placeholderUrl: "https://codepen.io/johnappleseed",
    logo: CodepenLogo,
    logoWhite: CodepenLogoWhite,
    color: "hsl(145, 68%, 32%)",
    validation: /(https:\/\/)?(www\.)?codepen\.io\/[\w\-\/]*/,
  },
  {
    id: 11,
    name: "freeCodeCamp",
    placeholderUrl: "https://www.freecodecamp.org/johnappleseed",
    logo: FreeCodeCampLogo,
    logoWhite: FreeCodeCampLogoWhite,
    color: "hsl(252, 50%, 27%)",
    validation: /(https:\/\/)?(www\.)?freecodecamp\.org\/[\w\-\/]*/,
  },
  {
    id: 12,
    name: "GitLab",
    placeholderUrl: "https://gitlab.com/johnappleseed",
    logo: GitLabLogo,
    logoWhite: GitLabLogoWhite,
    color: "hsl(11, 83%, 53%)",
    validation: /(https:\/\/)?(www\.)?gitlab\.com\/[\w\-\/]*/,
  },
  {
    id: 13,
    name: "Hashnode",
    placeholderUrl: "https://hashnode.com/@johnappleseed",
    logo: HashNodeLogo,
    logoWhite: HashNodeLogoWhite,
    color: "hsl(227, 98%, 42%)",
    validation: /(https:\/\/)?(www\.)?hashnode\.com\/@[\w\-\/]*/,
  },
  {
    id: 14,
    name: "Stack Overflow",
    placeholderUrl: "https://stackoverflow.com/users/1234/johnappleseed",
    logo: StackOverflowLogo,
    logoWhite: StackOverflowLogoWhite,
    color: "hsl(29, 100%, 46%)",
    validation:
      /(https:\/\/)?(www\.)?stackoverflow\.com\/users\/\d+\/[\w\-\/]*/,
  },
];
