import React from "react";
import "./css/sidebar.css"
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function Sidebar() {
    return(
    <div className="sidebar"> 
        <div className="sidebar_btn">
            <button>
                <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"></img>
                <span>New</span>
            </button>
        </div>

        <div className="sidebar_options">

            <div className="sidebar_option sidebar_option-Active">
                <MobileScreenShareIcon/>
                <span><b>My Drive</b></span>
            </div>

            <div className="sidebar_option">
                <DevicesIcon/>
                <span>Computer</span>
            </div>

            <div className="sidebar_option">
                <PeopleAltIcon/>
                <span>Shared with me</span>
            </div>

            <div className="sidebar_option">
                <QueryBuilderOutlinedIcon/>
                <span>Recent</span> 
            </div>

            <div className="sidebar_option">
                <StarBorderOutlinedIcon/>
                <span>Started</span>
            </div>

            <div className="sidebar_option">
                <DeleteOutlineOutlinedIcon/>
                <span>trash</span>
            </div>
            <hr/>
            <div className="sidebar_options">
                <div className="sidebar_option">
                    <CloudQueueIcon/>
                    <span>Storage</span>
                </div>

                <div className="progress_bar">
                    <progress size="tiny" value="50" max="100"/>
                    <span>6.45GB of 15GB used  </span>
                </div>

            </div>
            

        </div>

    </div>
    )
}

export default Sidebar