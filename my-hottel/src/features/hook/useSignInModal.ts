import { useState } from "react";

export type AuthMode = "signin" | "signup";

export function useSignInModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("signin");

  return { open, setOpen, mode, setMode };
}
