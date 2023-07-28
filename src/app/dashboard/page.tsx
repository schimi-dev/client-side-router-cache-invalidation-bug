import { findProjects } from "@/server/lib";
import Link from "next/link";

export default async function Page() {

    const projects = await findProjects()

    return (
        <div className="w-full">
            <main className="flex flex-col gap-7 max-w-3xl mx-auto px-5 py-10">
                <h1 className="text-2xl font-medium">
                    {"Your projects"}
                </h1>
                <ul className="grid grid-cols-3 gap-4">
                    {projects.map(project => (
                        <li key={project.id}>
                            <Link
                                className="flex flex-col gap-2 items-center justify-center h-52 rounded-md border shadow hover:shadow-md hover:bg-secondary-50 dark:hover:bg-secondary-700 bg-white dark:bg-secondary-800 border-secondary-200 dark:border-secondary-700 p-4 text-center"
                                href={`/dashboard/${project.id}`}
                            >
                                <span className="text-sm font-medium">
                                    {project.name}
                                </span>
                                <span className="text-xs text-secondary-500 dark:text-secondary-400">
                                    {project.description}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>

    )
}

export const metadata = {
    title: "Master"
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
