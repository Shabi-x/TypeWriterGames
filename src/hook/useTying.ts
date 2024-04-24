import { useCallback, useEffect, useRef, useState } from "react";
// import useEngine from "./useEngines";
const isKeyAllowed = (code: string) => {
  return (
    code === "Backspace" ||
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Space"
  );
};
const useTying = (enabled: boolean) => {
  const [typed, setTyped] = useState<string>("");
  const [cursor, setCursor] = useState<number>(0);
  const totalTyped = useRef<number>(0);
  const totalTypeValue = totalTyped.current;
  // const { state } = useEngine();
  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isKeyAllowed(code)) return;

      switch (code) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));
          setCursor((prev) => prev - 1);
          if (totalTyped.current > 0) {
            totalTyped.current -= 1;
          }
          break;
        default:
          setTyped((prev) => prev.concat(key));
          setCursor((prev) => prev + 1);
          totalTyped.current += 1;
          break;
      }
    },
    [enabled]
  );

  const clearTyped = () => {
    setTyped("");
    setCursor(0);
  };

  const resetTotalTyped = () => {
    totalTyped.current = 0;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTypeValue,
  };
};
export default useTying;
