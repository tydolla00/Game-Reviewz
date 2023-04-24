import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { CommentsService } from "../../services/ArticlesService";
import { useEffect, useState } from "react";

const Comments = ({ currentUserId, pageId }) => {
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  let path = window.location.pathname.substring(0, 6) === "/games"; // Could cause problems when move to AWS.

  const rootComments = comments.filter((comment) => comment.parentId === null);

  const getReplies = (commentId) =>
    comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text, parentId) => {
    if (path) {
      CommentsService.createGameComment(
        text,
        parentId,
        pageId,
        currentUserId
      ).then((comment) => {
        console.log(comment.data);
        setComments([comment.data, ...comments]);
        setActiveComment(null);
      });
    } else {
      CommentsService.createTechComment(
        text,
        parentId,
        pageId,
        currentUserId
      ).then((comment) => {
        setComments([comment, ...comments]);
        setActiveComment(null);
      });
    }
  };

  const updateComment = (text, commentId) => {
    console.log("Updating " + commentId);
    if (path) {
      CommentsService.updateGameComment(text, commentId).then((res) => {
        console.log(res.data);
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, comment: text };
          }
          return comment;
        });
        console.log(updatedComments + "updated comments");
        setComments(updatedComments);
        setActiveComment(null);
        console.log(comments);
      });
    } else {
      CommentsService.updateTechComment(text, commentId).then(() => {
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, body: text };
          }
          return comment;
        });
        setComments(updatedComments);
        setActiveComment(null);
      });
    }
  };

  const deleteComment = (commentId) => {
    if (path) {
      if (window.confirm("Are you sure you want to delete your comment")) {
        CommentsService.deleteGameComment(commentId).then(() => {
          const updatedComments = comments.filter(
            (comment) => comment.id !== commentId
          );
          setComments(updatedComments);
        });
      }
    } else {
      if (window.confirm("Are you sure you want to delete your comment")) {
        CommentsService.deleteTechComment(commentId).then(() => {
          const updatedComments = comments.filter(
            (comment) => comment.id !== commentId
          );
          setComments(updatedComments);
        });
      }
    }
  };

  useEffect(() => {
    if (path) {
      CommentsService.getGameComments(pageId).then((res) => {
        console.log(res.data);
        setComments(res.data);
        console.log(comments);
      });
    } else {
      CommentsService.getTechComments(pageId).then((res) => {
        console.log(res.data);
        setComments(res.data);
        console.log(comments);
      });
    }
  }, []);

  // console.log(comments);
  return (
    <div className="comments">
      <p className={"commentsTitle"}>{`Comments(${comments.length})`}</p>
      <div className="comment-form-title">Leave a comment</div>
      <CommentForm
        submitLabel="Write"
        handleSubmit={addComment}
        currentUserId={currentUserId}
      />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};
export default Comments;
