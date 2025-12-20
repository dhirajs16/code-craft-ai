"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job started")
    }
  }));

  return (
    <div className="max-w-7xl p-4 mx-auto">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: "Jake" })}>
        Invoke background jobs
      </Button>
    </div>
  );
};

export default page;
