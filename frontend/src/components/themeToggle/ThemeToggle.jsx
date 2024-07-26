import React from "react";

export default function ThemeToggle({isDarkMode, onToggle}) {
  return (
    <>
      <label className={`flex items-center cursor-pointer text-gray-600`}>
        <div className="toggle">
          <input
            className="toggle-state hidden"
            type="checkbox"
            name="check"
            value="check"
            checked={isDarkMode}
            onChange={onToggle}
          />
          <div className="indicator"></div>
        </div>
      </label>
    </>
  );
}
