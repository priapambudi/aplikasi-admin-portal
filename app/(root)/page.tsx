"use client";

import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4">
      <Modal
        title="test title"
        description="test description"
        isOpen
        onClose={() => {}}
      >
        {" "}
        Children{" "}
      </Modal>
    </div>
  );
}
