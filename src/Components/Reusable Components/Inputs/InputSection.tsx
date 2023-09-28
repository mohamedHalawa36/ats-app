import React from "react";
import "./sectionInput.css";
type InputSectionProps = {
  title: string;
  children: React.ReactNode;
};
export default function InputSection({ title, children }: InputSectionProps) {
  return (
    <div className="inputSection-container">
      <label className="sectionInput-label">{title}</label>
      <div>{children}</div>
    </div>
  );
}
