"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateWorkspaceForm } from "./create-workspace-form";
import { UseCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
    const { isOpen, close } = UseCreateWorkspaceModal();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={() => { }}>
            <CreateWorkspaceForm onCancel={close} />
        </ResponsiveModal>
    );
};