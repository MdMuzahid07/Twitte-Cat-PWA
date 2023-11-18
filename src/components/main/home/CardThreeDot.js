import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineUserDelete } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoMdSad } from "react-icons/io";
import { BsFillPersonXFill } from "react-icons/bs";
import { RiFlag2Line } from "react-icons/ri";

const CardThreeDot = () => {
  return (
    <div className="dropdown dropdown-end absolute right-5 top-5 z-10">
      <label
        className="btn btn-sm btn-circle btn-ghost cursor-pointer"
        tabIndex={0}
      >
        <BsThreeDots />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-0 rounded-2xl bg-base-100 border w-64"
      >
        <li type="button">
          <p>
            <IoMdSad /> Not interested
          </p>
        </li>
        <li type="button">
          <p>
            <BsFillPersonXFill /> Unfollow
          </p>
        </li>
        <li type="button">
          <p>
            <AiOutlineUserDelete /> Block user
          </p>
        </li>
        <li type="button">
          <p>
            <RiFlag2Line /> Report post
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CardThreeDot;
