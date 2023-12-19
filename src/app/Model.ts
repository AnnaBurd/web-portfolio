export type ProjectFrontmatter = {
  title: string;
  introduction: string;
  previewUrl: string;
  repositoryUrl: string;
  mockupAsset: string;
  previewAsset: string;
  editedAt: string;
  tags: string[];
};

export type ProjectData = { slug: string } & ProjectFrontmatter;
