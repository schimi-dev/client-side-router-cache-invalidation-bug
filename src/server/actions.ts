'use server'

import { revalidatePath } from "next/cache";
import { updateProject } from "./lib";

export const updateProjectAction = async (formData: FormData) => {
    const data = {
        id: formData.get("id") as string,
        name: formData.get("name") as string,
        description: formData.get("description") as string
    }
    await updateProject(data.id, data.name, data.description);
    revalidatePath("/");
}