import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTying from "./useTying";
import { countErrors } from "../utils/helper";

export type State = "start" | "run" | "finish";

const initialTime = 10;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const [errors, setErrors] = useState<number>(0);
  const { words, updateWords } = useWords(20);

  const { typed, resetTotalTyped, clearTyped, totalTyped, cursor } = useTying(
    state != "finish"
  );
  const AreWordsFinished = cursor == words.length;
  const { timeLeft, resetCountDown, startCountDown } =
    useCountdownTimer(initialTime);

  const restart = () => {
    resetCountDown();
    resetTotalTyped();
    setState("start");
    updateWords();
    clearTyped();
    setErrors(0);
  };

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(words.length, cursor));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [cursor, typed, words]);

  useEffect(() => {
    if (state === "start" || cursor > 0) {
      setState("run");
      startCountDown();
    }
  }, [state, startCountDown, cursor]);

  useEffect(() => {
    if (timeLeft == 0 && state == "run") {
      setState("finish");
      sumErrors();
    }
  }, [state, sumErrors, timeLeft]);

  useEffect(() => {
    if (AreWordsFinished) {
      updateWords();
      clearTyped();
      sumErrors();
    }
  }, [AreWordsFinished, clearTyped, sumErrors, updateWords]);

  return {
    state,
    words,
    timeLeft,
    typed,
    errors,
    totalTyped,
    restart,
  };
};
export default useEngine;
