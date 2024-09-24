"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Apakah anda yakin?"
      description="this action cannot be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button
          disabled={loading}
          onClick={onClose}
          className="rounded-xl bg-slate-50 hover:bg-slate-100"
        >
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={onConfirm}
          className="bg-red-500 rounded-xl text-white hover:bg-red-600"
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};
