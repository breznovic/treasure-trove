"use client";

import { useState, useEffect } from "react";
import s from "./Parameters.module.css";
import { HeroParameter } from "@/app/utils/types/heroesTypes";

type Props = {
  points: number;
  setPoints: (points: number) => void;
  bonus: string | undefined;
  onParametersChange: (parameters: HeroParameter[]) => void;
};

type ParameterState = {
  [key: string]: number;
};

const Parameters = ({
  points,
  setPoints,
  bonus,
  onParametersChange,
}: Props) => {
  const [parameters, setParameters] = useState<ParameterState>({
    strength: 0,
    endurance: 0,
    dexterity: 0,
    intelligence: 0,
    charisma: 0,
    luck: 0,
  });

  const [initialValues, setInitialValues] = useState<ParameterState>({
    strength: 0,
    endurance: 0,
    dexterity: 0,
    intelligence: 0,
    charisma: 0,
    luck: 0,
  });

  const parseBonus = (bonus: string) => {
    const match = bonus.match(/\+(\d+) to (\w+)/);
    if (match) {
      const value = parseInt(match[1], 10);
      const param = match[2].toLowerCase();
      return { value, param };
    }
    return { value: 0, param: "" };
  };

  useEffect(() => {
    if (bonus) {
      const { value, param } = parseBonus(bonus);
      const newParameters = { ...parameters };
      const newInitialValues = { ...initialValues };

      Object.keys(newParameters).forEach((key) => {
        newParameters[key] = param === key ? value : 0;
        newInitialValues[key] = param === key ? value : 0;
      });

      setParameters(newParameters);
      setInitialValues(newInitialValues);
      setPoints(3);
    } else {
      setParameters({
        strength: 0,
        endurance: 0,
        dexterity: 0,
        intelligence: 0,
        charisma: 0,
        luck: 0,
      });
      setInitialValues({
        strength: 0,
        endurance: 0,
        dexterity: 0,
        intelligence: 0,
        charisma: 0,
        luck: 0,
      });
      setPoints(3);
    }
  }, [bonus, setPoints]);

  useEffect(() => {
    const heroParameters: HeroParameter[] = [
      { id: 1, title: "strength", value: parameters.strength },
      { id: 2, title: "endurance", value: parameters.endurance },
      { id: 3, title: "dexterity", value: parameters.dexterity },
      { id: 4, title: "intelligence", value: parameters.intelligence },
      { id: 5, title: "charisma", value: parameters.charisma },
      { id: 6, title: "luck", value: parameters.luck },
    ];
    onParametersChange(heroParameters);
  }, [parameters]); // Only depend on parameters

  const increment = (param: string) => {
    if (points > 0) {
      setParameters((prev) => ({
        ...prev,
        [param]: prev[param] + 1,
      }));
      setPoints(points - 1);
    }
  };

  const decrement = (param: string) => {
    if (parameters[param] > initialValues[param]) {
      setParameters((prev) => ({
        ...prev,
        [param]: prev[param] - 1,
      }));
      setPoints(points + 1);
    } else if (parameters[param] > 0 && initialValues[param] === 0) {
      setParameters((prev) => ({
        ...prev,
        [param]: prev[param] - 1,
      }));
      setPoints(points + 1);
    }
  };

  const parameterList = [
    { label: "Strength", param: "strength" },
    { label: "Endurance", param: "endurance" },
    { label: "Dexterity", param: "dexterity" },
    { label: "Intelligence", param: "intelligence" },
    { label: "Charisma", param: "charisma" },
    { label: "Luck", param: "luck" },
  ];

  return (
    <div className={s.container}>
      {parameterList.map(({ label, param }) => (
        <div className={s.parameter} key={param}>
          <label>{label}</label>
          <div className={s.controls}>
            <button onClick={() => decrement(param)}>-</button>
            <span>{parameters[param]}</span>
            <button onClick={() => increment(param)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parameters;
