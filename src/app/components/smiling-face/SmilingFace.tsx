"use client";

import { useEffect, useState } from "react";
import styles from "./SmilingFace.module.css";

type Props = {
  isBlinking?: boolean;
};

const SmilingFace: React.FC<Props> = ({ isBlinking = true }) => {
  const [blinkDelay, setBlinkDelay] = useState(0.3);
  const blinkDuration = 8;

  // Generate random intervals between blinks
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isBlinking)
      timer = setTimeout(
        () => {
          setBlinkDelay((prev) => {
            return Math.floor(Math.random() * 15);
          });
        },
        (blinkDelay + blinkDuration + 5) * 1000, // Blink with random intervals
      );

    return () => {
      timer && clearTimeout(timer);
    };
  }, [isBlinking, blinkDelay, blinkDuration]);

  return (
    <svg viewBox="0 0 2264 2264" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        id="smiley-face"
        className={styles["smiley-face"]}
        style={
          {
            "--blink-animation-delay": `${blinkDelay}s`,
          } as React.CSSProperties
        }
      >
        <path
          id="face"
          d="M2263.59 1132.21C2263.59 1757.05 1757.05 2263.57 1132.21 2263.57C507.382 2263.57 0.850586 1757.05 0.850586 1132.21C0.850586 507.377 507.382 0.854218 1132.21 0.854218C1757.05 0.854218 2263.59 507.377 2263.59 1132.21Z"
          fill="var(--color-link-highlight)"
        />
        <path
          id="mouth"
          d="M2028.91 1218.16L2019 1129.44C2003.66 1131.14 1989.34 1131.93 1975.91 1131.93C1931.84 1131.89 1897.96 1123.65 1871.09 1111.97C1850.95 1103.19 1834.73 1092.37 1821.47 1081.03C1801.58 1064.03 1788.41 1045.64 1780.39 1031.83C1776.37 1024.92 1773.67 1019.2 1772.07 1015.49C1771.26 1013.64 1770.74 1012.28 1770.47 1011.55L1770.24 1010.91L1765.63 1012.5L1770.26 1010.96L1741.06 1020.76L1685.44 1038.79C1686.11 1040.89 1690.14 1052.84 1699.46 1070C1706.44 1082.85 1716.41 1098.65 1730.26 1115.27C1746.52 1134.76 1768.37 1155.38 1796.64 1173.21C1789.76 1346.27 1716.95 1502 1602.45 1616.59C1481.96 1737 1316 1811.34 1132.21 1811.37C948.433 1811.34 782.462 1737 661.979 1616.59C548.068 1502.61 475.43 1347.92 467.891 1175.96C486.688 1165.73 503.048 1154.19 517.038 1142.2C546.164 1117.25 565.25 1090.68 577.249 1070.04C589.247 1049.36 594.236 1034.52 595.01 1032.16L529.618 1010.96L510.214 1004.26C510.185 1004.36 507.375 1012.41 500.718 1024.06C495.73 1032.8 488.588 1043.55 478.914 1054.64C464.359 1071.29 444.293 1088.67 416.424 1102.11C388.511 1115.49 352.567 1125.25 304.529 1125.29C291.125 1125.29 276.785 1124.52 261.446 1122.81L251.547 1211.52C270.021 1213.59 287.676 1214.56 304.529 1214.56C331.914 1214.57 357.191 1211.95 380.394 1207.29C395.11 1391.2 475.878 1556.79 598.86 1679.71C735.216 1816.13 924.068 1900.65 1132.21 1900.63C1340.36 1900.65 1529.21 1816.13 1665.55 1679.71C1787.93 1557.41 1868.47 1392.89 1883.78 1210.12C1911.32 1217.09 1941.97 1221.23 1975.91 1221.2C1992.77 1221.2 2010.44 1220.23 2028.91 1218.16L2028.91 1218.16Z"
          fill="rgb(var(--text-rgb))"
        />
        <path
          id="eye"
          d="M929 916.244C929 964.711 881.771 1004 823.5 1004C765.235 1004 718 964.711 718 916.244V452.751C718 404.284 765.235 365 823.5 365C881.771 365 929 404.284 929 452.751V916.244Z"
          fill="rgb(var(--text-rgb))"
          className={`${styles.eye} ${isBlinking ? styles.blink : ""}`}
        />
        <path
          id="eye_2"
          d="M1563 916.244C1563 964.711 1515.76 1004 1457.49 1004C1399.24 1004 1352 964.711 1352 916.244V452.751C1352 404.284 1399.24 365 1457.49 365C1515.76 365 1563 404.284 1563 452.751V916.244Z"
          fill="rgb(var(--text-rgb))"
          className={`${styles.eye} ${isBlinking ? styles.blink : ""}`}
        />
      </g>
    </svg>
  );
};

export default SmilingFace;