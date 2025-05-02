import { useEffect, useState } from "react";
import {
  onMessage,
  fetchLikedFormSubmissions,
  saveLikedFormSubmission,
} from "../service/mockServer";

export function useToastManager() {
  const [toasts, setToasts] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    onMessage((newSubmission) => {
      setToasts((prev) => [...prev, newSubmission]);
    });

    fetchLikedFormSubmissions()
      .then((res) => setLiked(res.formSubmissions))
      .catch(console.error);
  }, []);

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

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, liked, likeToast, dismissToast };
}
