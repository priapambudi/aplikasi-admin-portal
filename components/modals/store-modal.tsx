"use client";

import * as z from "zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const [loading, setLoading] = useState(false);
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);
      console.log(response.data);
      toast.success("Layanan baru berhasil dibuat");
      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("Gagal membuat layanan baru");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      title="Buat Store"
      description="Tambahkan layanan yang diinginkan"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>{" "}
                    <FormControl>
                      <Input
                        placeholder="Nama Layanan"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storeModal.onClose}
                  className="rounded-xl bg-slate-50 hover:bg-slate-100"
                >
                  Cancel
                </Button>
                <Button
                  disabled={loading}
                  type="submit"
                  className="rounded-xl bg-black hover:bg-black/70 text-white"
                >
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
