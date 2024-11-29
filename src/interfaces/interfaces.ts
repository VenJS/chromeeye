export interface MainMenu {
  name: string;
  url: string | null;
  order: number;
}

export interface Hero {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Services {
  title: string;
  description: string;
  items: Array<Service>;
  buttonLabel: string;
  buttonUrl: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface Portfolio {
  title: string;
  description: string;
  items: Array<PortfolioItem>;
}

export interface AgencyServices {
  title: string;
  items: Array<Omit<Hero, "buttonLabel" | "buttonUrl">>;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface CompanyData {
  address: string;
  phone: string;
  email: string;
  logo: string;
  name: string;
  socialMedia: SocialMedia;
  intro: string;
}

export interface PageData {
  main_menu: Array<MainMenu>;
  hero: Hero;
  services: Services;
  portfolio: Portfolio;
  agency_services: AgencyServices;
  company_data: CompanyData;
  footer_menu: Array<MainMenu>;
}

export interface ButtonProps {
  href?: string;
  label?: string;
  type?: "default" | "dark-gray";
}

export interface TypographyProps {
  variant:
    | "title"
    | "medium-title"
    | "small-title"
    | "description"
    | "small-description"
    | "description-bold";
  children: React.ReactNode;
  className?: string;
}
