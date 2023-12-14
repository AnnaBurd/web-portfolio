import { ProjectFrontmatter } from "@/app/Model";
import { Locale } from "@/app/i18n/i18n-config";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getProjectsData = (lang: Locale) => {
  const projectsFiles = fs.readdirSync(
    path.join(process.cwd(), "src", "posts"),
  );

  // Map the file names to the posts data
  const projects = projectsFiles.map((filename) => {
    // console.log("filename", filename);

    const slug = filename.toLowerCase();
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "src", "posts", filename, `project.${lang}.md`),
      "utf8",
    );

    const commonFileContent = fs.readFileSync(
      path.join(process.cwd(), "src", "posts", filename, `common.md`),
      "utf8",
    );

    // console.log("slug", slug);
    // console.log("fileContent", fileContent);

    const parsedContent = matter(fileContent);
    const commonParsedContent = matter(commonFileContent);
    // console.log("parsedContent", parsedContent);

    const frontmatterData = {
      ...commonParsedContent.data,
      ...parsedContent.data,
    } as ProjectFrontmatter;

    return {
      slug,
      ...frontmatterData,
    };
  });

  return projects;
};

export const getProjectData = (slug: string, lang: Locale) => {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), "src", "posts", slug, `project.${lang}.md`),
    "utf8",
  );

  const commonFileContent = fs.readFileSync(
    path.join(process.cwd(), "src", "posts", slug, `common.md`),
    "utf8",
  );

  const parsedContent = matter(fileContent);
  const commonParsedContent = matter(commonFileContent);

  const frontmatterData = {
    ...commonParsedContent.data,
    ...parsedContent.data,
  } as ProjectFrontmatter;

  const content = parsedContent.content;

  return {
    frontmatterData,
    content,
  };
};
