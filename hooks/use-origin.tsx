import { useEffect, useState } from "react";
import { create } from "zustand"

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useOrigin = () => {

  const [mounted, setMounted] = useState(false);
  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : '';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return '';
  }

  return origin;
}