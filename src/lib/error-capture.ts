let lastError: Error | null = null;

if (typeof window === "undefined") {
  process.on("uncaughtException", (error) => {
    lastError = error;
    console.error("Uncaught Exception captured:", error);
  });
  
  process.on("unhandledRejection", (reason) => {
    lastError = reason instanceof Error ? reason : new Error(String(reason));
    console.error("Unhandled Rejection captured:", reason);
  });
}

export function consumeLastCapturedError(): Error | null {
  const err = lastError;
  lastError = null;
  return err;
}
