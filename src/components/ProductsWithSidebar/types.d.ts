import React from "react";

export interface ISidebar {
  id: string;
  icon: IconType;
  parentText: string;
  childText?: string[];
}
