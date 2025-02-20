import React, { useState } from "react";
import "./css/Post.css";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutline,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  return (
    <div className="post">
      <div className="post-info">
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
      </div>
      <div className="post-body">
        <div className="post-question">
          <p>This is test question</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post-btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal-question">
              <h1>This is test question.</h1>
              <p>asked by {" "} <span className="name">Username</span>on {" "}
              <span className="name">Timestamp</span></p>
            </div>

            <div className="modal-answer">
              <textarea type="text" placeholder="Enter your answer..." alt="" />
              {/* <ReactQuill placeholder="Enter your answer" /> */}
            </div>

            <div className="modal-buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutline />
        <div className="post-footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "10px 0px",
        }}
      >
        1 Answer
      </p>

      <div
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post-answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          >
            <Avatar />
            <div className="post-info1">
              <p>Username</p>
              <span>Timestamp</span>
            </div>
          </div>
          <div className="post-answer">This is test answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
