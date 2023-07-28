import { cache } from "react";
import fs from "fs/promises";

const FILE_PATH = "project-data.json"

export const findProjects = cache(async () => {
    const _projects = await fs.readFile(FILE_PATH);
    return JSON.parse(_projects.toString()) as TProject[];
});

export const findProject = cache(async (id: string) => {
    const _projects = await fs.readFile(FILE_PATH);
    const projects = JSON.parse(_projects.toString()) as TProject[];
    return projects.find(x => x.id === id) ?? null;
});

export const updateProject = async (id: string, name: string, description: string) => {
    const projects = await findProjects();
    const project = projects.find(x => x.id === id);
    if (project) {
        project.name = name;
        project.description = description;
    }
    await fs.writeFile(FILE_PATH, JSON.stringify(projects))
}

export type TProject = {
    id: string;
    name: string;
    description: string;
}
