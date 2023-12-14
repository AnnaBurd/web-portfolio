export type ProjectFrontmatter = {
  title: string;
  introduction: string;
  previewUrl: string;
  repositoryUrl: string;
  previewImg: string;
  editedAt: string;
  tags: string[];
};

export type ProjectData = { slug: string } & ProjectFrontmatter;
