import { ReactElement, useEffect, useRef, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";

function genRouterKey() {
  const location = useLocation();
  return location.pathname;
}

function useUpdateComponent() {
  const [, update] = useState(0);
  return () => update(prev => prev + 1);
}

export default function AliveOutlet() {
  const updateComponent = useUpdateComponent();
  const currentKey = genRouterKey();
  const ele = useOutlet();

  const aliveComponents = useRef<{[key: string]: ReactElement}>({});

  useEffect(() => {
    if(!aliveComponents.current[currentKey] && ele) {
      aliveComponents.current[currentKey] = ele;
      updateComponent();
    }
  }, [currentKey]);

  // return aliveComponents.current[currentKey];
  return <>{
    Object.entries(aliveComponents.current).map(([key, ele]) => {
      return <div key={key} style={{display: currentKey === key ? 'block': 'none'}}>{ele}</div>;
    })
  }</>;
}