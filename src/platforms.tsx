import GitHubLogo from "/assets/images/icon-github.svg";
import YouTubeLogo from "/assets/images/icon-youtube.svg";
import TwitterLogo from "/assets/images/icon-twitter.svg";
import LinkedInLogo from "/assets/images/icon-linkedin.svg";
import FacebookLogo from "/assets/images/icon-facebook.svg";
import FrontendMentorLogo from "/assets/images/icon-frontend-mentor.svg";
import TwitchLogo from "/assets/images/icon-twitch.svg";
import DevtoLogo from "/assets/images/icon-devto.svg";
import CodewarsLogo from "/assets/images/icon-codewars.svg";
import CodepenLogo from "/assets/images/icon-codepen.svg";
import FreeCodeCampLogo from "/assets/images/icon-freecodecamp.svg";
import GitLabLogo from "/assets/images/icon-gitlab.svg";
import HashNodeLogo from "/assets/images/icon-hashnode.svg";
import StackOverflowLogo from "/assets/images/icon-stack-overflow.svg";
type LinksTypes = {
  name: string;
  placeholderUrl: string;
  logo: string;
  color: string;
  validation: RegExp;
}[];
export const LINK_SITES: LinksTypes = [
  {
    name: "GitHub",
    placeholderUrl: "https://www.github.com/johnappleseed",
    logo: GitHubLogo,
    color: "hsl(0, 0%, 10%)",
    validation: /(https:\/\/)?(www\.)?github\.com\/[\w\-\/]*/,
  },
  {
    name: "YouTube",
    placeholderUrl: "https://www.youtube.com/johnappleseed",
    logo: YouTubeLogo,
    color: "hsl(0, 84%, 58%)",
    validation: /(https:\/\/)?(www\.)?youtube\.com\/.*/,
  },
  {
    name: "Twitter",
    placeholderUrl: "https://www.twitter.com/johnappleseed",
    logo: TwitterLogo,
    color: "hsl(198, 79%, 59%)",
    validation: /(https:\/\/)?(www\.)?twitter\.com\/[\w\-\/]*/,
  },
  {
    name: "LinkedIn",
    placeholderUrl: "https://www.linkedin.com/johnappleseed",
    logo: LinkedInLogo,
    color: "hsl(223, 100%, 59%)",
    validation: /(https:\/\/)?(www\.)?linkedin\.com\/[\w\-\/]*/,
  },
  {
    name: "Facebook",
    placeholderUrl: "https://www.facebook.com/johnappleseed",
    logo: FacebookLogo,
    color: "hsl(227, 66%, 41%)",
    validation: /(https:\/\/)?(www\.)?facebook\.com\/[\w\-\/]*/,
  },
  {
    name: "Frontend Mentor",
    placeholderUrl: "https://www.frontendmentor.io/johnappleseed",
    logo: FrontendMentorLogo,
    color: "hsl(0, 0%, 100%)",
    validation: /(https:\/\/)?(www\.)?frontendmentor\.io\/[\w\-\/]*/,
  },
  {
    name: "Twitch",
    placeholderUrl: "https://www.twitch.tv/johnappleseed",
    logo: TwitchLogo,
    color: "hsl(313, 84%, 59%)",
    validation: /(https:\/\/)?(www\.)?twitch\.tv\/[\w\-\/]*/,
  },
  {
    name: "Dev.to",
    placeholderUrl: "https://dev.to/johnappleseed",
    logo: DevtoLogo,
    color: "hsl(0, 0%, 20%)",
    validation: /(https:\/\/)?(www\.)?dev\.to\/[\w\-\/]*/,
  },
  {
    name: "Codewars",
    placeholderUrl: "https://www.codewars.com/users/johnappleseed",
    logo: CodewarsLogo,
    color: "hsl(331, 68%, 32%)",
    validation: /(https:\/\/)?(www\.)?codewars\.com\/users\/[\w\-\/]*/,
  },
  {
    name: "Codepen",
    placeholderUrl: "https://codepen.io/johnappleseed",
    logo: CodepenLogo,
    color: "hsl(145, 68%, 32%)",
    validation: /(https:\/\/)?(www\.)?codepen\.io\/[\w\-\/]*/,
  },
  {
    name: "freeCodeCamp",
    placeholderUrl: "https://www.freecodecamp.org/johnappleseed",
    logo: FreeCodeCampLogo,
    color: "hsl(252, 50%, 27%)",
    validation: /(https:\/\/)?(www\.)?freecodecamp\.org\/[\w\-\/]*/,
  },
  {
    name: "GitLab",
    placeholderUrl: "https://gitlab.com/johnappleseed",
    logo: GitLabLogo,
    color: "hsl(11, 83%, 53%)",
    validation: /(https:\/\/)?(www\.)?gitlab\.com\/[\w\-\/]*/,
  },
  {
    name: "Hashnode",
    placeholderUrl: "https://hashnode.com/@johnappleseed",
    logo: HashNodeLogo,
    color: "hsl(227, 98%, 42%)",
    validation: /(https:\/\/)?(www\.)?hashnode\.com\/@[\w\-\/]*/,
  },
  {
    name: "Stack Overflow",
    placeholderUrl: "https://stackoverflow.com/users/1234/johnappleseed",
    logo: StackOverflowLogo,
    color: "hsl(29, 100%, 46%)",
    validation:
      /(https:\/\/)?(www\.)?stackoverflow\.com\/users\/\d+\/[\w\-\/]*/,
  },
];