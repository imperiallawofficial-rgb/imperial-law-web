"use client";

import { useEffect } from "react";

export function SecurityGuard() {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu to prevent "Save Image As", "Save As", "Inspect", etc.
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Drag-and-Drop to prevent dragging images or content out of the browser
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 3. Disable keyboard shortcuts used to save, inspect, view source, or print data
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // Block Ctrl+S / Cmd+S (Save webpage & assets to disk)
      if (isCtrlOrCmd && key === "s") {
        e.preventDefault();
        return;
      }

      // Block Ctrl+U / Cmd+U (View HTML source)
      if (isCtrlOrCmd && key === "u") {
        e.preventDefault();
        return;
      }

      // Block Ctrl+P / Cmd+P (Print to PDF / file export)
      if (isCtrlOrCmd && key === "p") {
        e.preventDefault();
        return;
      }

      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools / Code inspection)
      if (
        e.key === "F12" ||
        (isCtrlOrCmd && e.shiftKey && (key === "i" || key === "j" || key === "c"))
      ) {
        e.preventDefault();
        return;
      }
    };

    // 4. Protect text copying outside form inputs/textareas
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInputField =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      // Only allow legitimate copy/paste operations inside input fields
      if (!isInputField) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return null;
}
