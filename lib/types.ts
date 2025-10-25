export type Site = {
  name: string;
  title: string;
  tagline: string;
  social: { label: string; href: string }[];
};
export type Project = {
  slug: string; title: string; year?: number; cover: string; summary: string;
  tags?: string[]; story?: string[]; metrics?: { label: string; value: string }[]; gallery?: string[];
};
