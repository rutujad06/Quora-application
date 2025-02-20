import React from "react";
import "./css/SidebarOptions.css";
import { Add } from "@mui/icons-material";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <Add />
        <p className="text">Create Spaces</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cas.stthomas.edu/_media-library/_images/history/1920x1080/stthomas-history-time.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
          alt=""
        />
        <p>Business</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/022/875/527/small/human-head-with-glowing-neurons-in-brain-esoteric-and-meditation-concept-connection-with-other-worlds-creates-with-generative-ai-free-photo.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://kripalu.org/sites/default/files/styles/resource_header/public/GettyImages-887636042_homecooking_hero.jpg?itok=6UnRIR8W"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.philosophytalk.org/sites/default/files/styles/large_blog__900x400_/public/silhouette-musical-note-clef-b.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuNsFM5HqX_CWOGHsDmTFKJqS-YeQu-MYfQ&s"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/healthy-trail-run-outdoor-cross-country-running-early-sunrise-concept-exercising-fitness-lifestyle-38475966.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQHLSXqMMDcFrQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676511563367?e=2147483647&v=beta&t=q8JPcWLyZtpVO94-J3n27rbLdkKxanAhpp7cKoENzzE"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSYcEoh-D1aOT_d3b5LoLi2dHpCL3qKOctA&s"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUVRGUBk5Hz-O_cXDOkH5TDwRdPqQ7sTetA&s"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
