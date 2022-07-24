import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export const CounterExample = (props) => {
    return (
      <div style={{position:'relative', padding:20}}>
          <Counter count={props.count} size={props.size} />
      </div>
    );
};
