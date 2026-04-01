import { useEffect, useState } from "react";

export function useContentProtection() {
  const [blurActive, setBlurActive] = useState(false);
  const [blockCount, setBlockCount] = useState(0);
  const [logs, setLogs] = useState([]);

  function logBlock(msg) {
    setBlockCount((c) => c + 1);
    setLogs((prev) => [
      { time: new Date().toLocaleTimeString(), msg },
      ...prev.slice(0, 19),
    ]);
  }

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      logBlock("Right-click blocked");
    };

    const handleCopy = (e) => {
      e.preventDefault();
      logBlock("Copy blocked");
    };

    const handleCut = (e) => {
      e.preventDefault();
      logBlock("Cut blocked");
    };

    const handleSelectStart = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      const k = (e.key || "").toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;
      const prtsc=e.PrtScKey;

      if (k === "printscreen") {
        e.preventDefault();
        setBlurActive(true);
        setTimeout(() => setBlurActive(false), 180000);
        logBlock("PrintScreen blocked");
        return;
      }
      if (ctrl && k === "p") { e.preventDefault(); logBlock("Ctrl+P (print) blocked"); return; }
      if (ctrl && !shift && k === "s") { e.preventDefault(); logBlock("Ctrl+S (save) blocked"); return; }
      if (ctrl && shift && k === "s") { e.preventDefault(); logBlock("Ctrl+Shift+S (save as) blocked"); return; }
      if (ctrl && shift && k === "i") { e.preventDefault(); logBlock("Ctrl+Shift+I (devtools) blocked"); return; }
      if (ctrl && shift && k === "j") { e.preventDefault(); logBlock("Ctrl+Shift+J (console) blocked"); return; }
      if (ctrl && shift && k === "c") { e.preventDefault(); logBlock("Ctrl+Shift+C (inspect) blocked"); return; }
      if (ctrl && k === "u") { e.preventDefault(); logBlock("Ctrl+U (view source) blocked"); return; }
      if (k === "f12") { e.preventDefault(); logBlock("F12 (devtools) blocked"); return; }
      if(prtsc) {return;}
    };

    const handleBeforePrint = () => {
      logBlock("Print dialog suppressed");
      document.body.style.visibility = "hidden";
      setTimeout(() => { document.body.style.visibility = "visible"; }, 100);
    };

    const handleAfterPrint = () => {
      document.body.style.visibility = "visible";
    };

    const originalPrint = window.print;
    window.print = () => logBlock("window.print() suppressed");

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.print = originalPrint;
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return { blurActive, blockCount, logs };
}