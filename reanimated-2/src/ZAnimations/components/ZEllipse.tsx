import React from "react";
import Animated from "react-native-reanimated";
import { Vector } from "react-native-redash";

import { Vector3 } from "./Vector";
import { addArc3, createPath3 } from "./Path3";
import ZPath from "./ZPath";

interface ZEllipseProps {
  rx: number;
  ry: number;
  camera: Vector<Animated.SharedValue<number>>;
  canvas: Vector3;
  stroke: string;
  strokeWidth: number;
  debug?: boolean;
}

const ZEllipse = ({
  rx: x,
  ry: y,
  camera,
  canvas,
  stroke,
  strokeWidth,
  debug,
}: ZEllipseProps) => {
  const path = createPath3({ x: 0, y: -y, z: 0 });
  addArc3(path, { x: x, y: -y, z: 0 }, { x: x, y: 0, z: 0 });
  addArc3(path, { x: x, y: y, z: 0 }, { x: 0, y: y, z: 0 });
  addArc3(path, { x: -x, y: y, z: 0 }, { x: -x, y: 0, z: 0 });
  addArc3(path, { x: -x, y: -y, z: 0 }, { x: 0, y: -y, z: 0 });
  return (
    <ZPath
      path={path}
      camera={camera}
      canvas={canvas}
      stroke={stroke}
      strokeWidth={strokeWidth}
      debug={debug}
    />
  );
};

export default ZEllipse;
