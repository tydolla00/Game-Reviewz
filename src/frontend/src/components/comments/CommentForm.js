import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  currentUserId,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextAreaDisabled = text.length === 0;
  const notLoggedIn = currentUserId === undefined;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="commentsection"
        placeholder={
          notLoggedIn ? "Please Login to leave a comment" : undefined
        }
        value={text}
        disabled={notLoggedIn}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isTextAreaDisabled}>Write</button>
      {hasCancelButton && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};
export default CommentForm;
