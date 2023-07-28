import Input from "@/components/Input";
import Label from "@/components/Label";
import Submit from "@/components/Submit";
import TextArea from "@/components/TextArea";
import { updateProjectAction } from "@/server/actions";
import { TProject } from "@/server/lib";
import { useId } from "react";

export default function UpdateProjetForm({ project }: { project: TProject }) {

    const id = useId()

    return (
        <form
            className="md:w-1/2 flex flex-col gap-6"
            spellCheck={false}
            autoComplete="off"
            action={updateProjectAction}
        >
            <input type="hidden" name="id" defaultValue={project.id} />
            <div>
                <Label htmlFor={`${id}-name`}>Name</Label>
                <Input
                    id={`${id}-name`}
                    name="name"
                    defaultValue={project.name}
                    required
                    maxLength={40}
                />
            </div>
            <div>
                <Label htmlFor={`${id}-description`}>Description</Label>
                <TextArea
                    id={`${id}-description`}
                    name="description"
                    defaultValue={project.description ?? ""}
                    maxLength={200}
                    rows={6}
                />
            </div>
            <div>
                <Submit>Update</Submit>
            </div>
        </form>
    )

}