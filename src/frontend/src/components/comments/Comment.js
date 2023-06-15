import { PersonCircle } from "react-bootstrap-icons";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing"; // * When replying, set to editing mode.
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying"; // * When replying, set to replying mode.
  const fiveMinutes = 300000; // * Editing ability only for 5 minutes.
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;

  return (
    <div key={comment.id} className="comment">
      <div>
        <PersonCircle className="userIcon" />
      </div>
      <div>
        <div className="user">
          <div className="username">
            {comment.username ? comment.username : "Deleted User"}
          </div>
          <div>{comment.createdAt}</div>
        </div>
        {!isEditing && <div>{comment.comment}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.comment}
            currentUserId={currentUserId}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="commentActions">
          {canReply && (
            <div
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div onClick={() => deleteComment(comment.id)}>Delete</div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            currentUserId={currentUserId}
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
