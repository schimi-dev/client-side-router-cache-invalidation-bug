import { findProject } from "@/server/lib";
import { notFound } from "next/navigation";
import UpdateProjetForm from "./UpdateProjectForm";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {

    const project = await findProject(params.id)

    if (!project)
        notFound();

    return (
        <main className="flex flex-col gap-7 max-w-3xl mx-auto px-5 py-10">
            <Link href="/dashboard" className="font-medium text-secondary-500">
                {"Back to projects"}
            </Link>
            <div className="flex flex-col gap-1 -mb-1">
                <h1 className="text-2xl font-medium">
                    {project.name}
                </h1>
                <p className="text-sm font-medium text-secondary-500">
                    {project.description}
                </p>
            </div>
            <hr className="w-full border-t border-t-secondary-200 dark:border-t-secondary-800" />
            <UpdateProjetForm project={project} />
        </main>
    )
}

export const metadata = {
    title: "Detail"
}
export const revalidate = 0;
export const dynamic = "force-dynamic";
