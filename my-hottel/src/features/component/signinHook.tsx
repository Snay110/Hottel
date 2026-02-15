 import { useState } from "react";

export function useSignInModal() {
 const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return { open, setOpen, mode, setMode };
}