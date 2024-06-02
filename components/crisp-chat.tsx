"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c475aef7-6091-4822-80bb-56ea92299115");
  }, []);

  return null;
};
