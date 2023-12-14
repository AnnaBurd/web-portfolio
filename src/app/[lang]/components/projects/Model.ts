export type ProjectFrontmatter = {
  title: string;
  introduction: string;
  previewUrl: string;
  previewImg: string;
  editedAt: string;
  tags: string[];
};

export type ProjectData = { slug: string } & ProjectFrontmatter;
