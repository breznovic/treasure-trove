"use client";

import { useState } from "react";
import s from "./Parameters.module.css";

const Parameters = () => {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [remainingPoints, setRemainingPoints] = useState(3);

  const increment = (paramSetter: Function) => {
    if (remainingPoints > 0) {
      paramSetter((prev: number) => prev + 1);
      setRemainingPoints((prev) => prev - 1);
    }
  };

  const decrement = (paramSetter: Function, currentValue: number) => {
    if (currentValue > 0) {
      paramSetter((prev: number) => prev - 1);
      setRemainingPoints((prev) => prev + 1);
    }
  };

  return (
    <div className={s.container}>
      <h2>Distribute 3 Points</h2>
      <div className={s.parameter}>
        <label>Strength</label>
        <div className={s.controls}>
          <button onClick={() => decrement(setStrength, strength)}>-</button>
          <span>{strength}</span>
          <button onClick={() => increment(setStrength)}>+</button>
        </div>
      </div>
      <div className={s.parameter}>
        <label>Dexterity</label>
        <div className={s.controls}>
          <button onClick={() => decrement(setDexterity, dexterity)}>-</button>
          <span>{dexterity}</span>
          <button onClick={() => increment(setDexterity)}>+</button>
        </div>
      </div>
      <div className={s.parameter}>
        <label>Intelligence</label>
        <div className={s.controls}>
          <button onClick={() => decrement(setIntelligence, intelligence)}>-</button>
          <span>{intelligence}</span>
          <button onClick={() => increment(setIntelligence)}>+</button>
        </div>
      </div>
      <div className={s.remainingPoints}>
        <span>Remaining Points: {remainingPoints}</span>
      </div>
    </div>
  );
};

export default Parameters;