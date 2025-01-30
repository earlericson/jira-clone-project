"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateProjectForm } from "./create-project-form";
import { UseCreateProjectModal } from "../hooks/use-create-project-modal";

export const CreateProjectModal = () => {
    const { isOpen, close } = UseCreateProjectModal();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={() => { }}>
            <CreateProjectForm onCancel={close} />
        </ResponsiveModal>
    );
};