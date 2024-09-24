"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BannerClient = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Banner (0)" description="Atur Banner Untuk Toko" />

        <Button
          onClick={() => router.push(`/${params.storeId}/banners/new`)}
          className="rounded bg-black text-white hover:bg-black/80"
        >
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};
