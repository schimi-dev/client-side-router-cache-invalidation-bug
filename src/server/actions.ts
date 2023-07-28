'use server'

import { revalidatePath } from "next/cache";
import { updateProject } from "./lib";

export const updateProjectAction = async (formData: FormData) => {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    await updateProject(id, name, description);
    revalidatePath("/");
}
