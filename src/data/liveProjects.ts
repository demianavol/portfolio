import type { Project } from "./profile";

export type LiveProject = Project & Required<Pick<Project, "link" | "previewImage">>;

export function selectLiveProjects(projects: readonly Project[]): LiveProject[] {
  return projects.filter(
    (project): project is LiveProject => Boolean(project.link && project.previewImage),
  );
}
