import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import {
  AssignmentTurnedInOutlined,
  ExpandMore,
  // Close,
  FeaturedPlayListOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, Input } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import "./css/QuoraHeader.css";
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css'

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const Close = <CloseIcon />;

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader-logo">
          <img
            src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png"
            alt="logo"
          />
        </div>

        <div className="qHeader-icons">
          <div className="qHeader-icon">
            <HomeIcon />
          </div>
          <div className="qHeader-icon">
            <FeaturedPlayListOutlined />
          </div>
          <div className="qHeader-icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader-icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader-icon">
            <NotificationsOutlined />
          </div>
        </div>

        <div className="qHeader-input">
          <SearchIcon />
          <input type="text" placeholder="Search Quora" />
        </div>
        <div className="qHeader-Rem">
          <Avatar />
        </div>
        <div className="qHeader-icon">
          <LanguageIcon />
        </div>

        <Button onClick={() => setIsModalOpen(true)}>Add Questions <ExpandMore /></Button>

        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay:{
              height: "auto",
            },
          }}
        >
          <div className="modal-title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal-info">
            <Avatar className="avatar" />

            <div className="modal-scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>

          <div className="modal-field">
            <Input type="text" placeholder="Start your question with 'What','How','Why',etc."/>
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>

              <input type="text"  
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              style={{
                margin: "5px 0",
                border: "1px solid lightgray",
                padding: "10px",
                outline: "2px solid #000",
              }}
              placeholder="Optional include a link that gives context"/>
              {
                inputUrl !== "" && (
                <img style={{
                  height: "40vh",
                  objectFit: "contain",
                }}
                src={inputUrl} alt="displayimage" />
              )}
            </div>
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
  );
}

export default QuoraHeader;
