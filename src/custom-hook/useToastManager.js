import { useEffect, useState } from "react";
import {
  saveLikedFormSubmission,
} from "../service/mockServer";

export function useToastManager() {
  const [toasts, setToasts] = useState([]);
  const [liked, setLiked] = useState([]);

  const likeToast = async (toast) => {
    try {
      const likedSubmission = {
        ...toast,
        data: { ...toast.data, liked: true },
      };
      await saveLikedFormSubmission(likedSubmission);
      setLiked((prev) => [...prev, likedSubmission]);
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    } catch (err) {
      console.error("Failed to like submission", err);
    }
  };


  return { toasts, liked, likeToast };
}
