import React from "react";
import { Snackbar, Button, Alert } from "@mui/material";

export default function ToastList({ toasts, onLike, onDismiss }) {
  return (
    <>
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity="info"
            action={
              <>
                <Button color="inherit" size="small" onClick={() => onLike(toast)}>
                  Like
                </Button>
                <Button color="inherit" size="small" onClick={() => onDismiss(toast.id)}>
                  Dismiss
                </Button>
              </>
            }
          >
            New submission from {toast.data.firstName} {toast.data.lastName}!
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}
