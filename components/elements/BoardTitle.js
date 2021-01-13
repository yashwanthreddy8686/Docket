import React, { useState } from "react";
// custom hooks
import { useDebounce } from "lib/hooks";
// services
import BoardService from "services/BoardService";

const boardTitleStyles = {
  padding: "6px",
  background: "transparent",
  border: "none",
  marginBottom: "10px",
  display: "block",
  width: "90%",
};

const boardTitleFocusStyles = {
  ...boardTitleStyles,
  outline: "none",
  boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.65)",
};

function BoardTitle(props) {
  const { text, boardId, projectId } = props;
  // states
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(text);
  const debouncedSearchTerm = useDebounce(value, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm && value !== "" && text != value) {
      BoardService.update(projectId, boardId, { name: value }).then((response) => {
        console.log(response);
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <input
        style={boardTitleStyles}
        value={value}
        style={isFocused ? boardTitleFocusStyles : boardTitleStyles}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}

export default BoardTitle;
