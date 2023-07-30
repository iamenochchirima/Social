import React, { Fragment, useEffect, useState } from "react";
import { format } from "timeago.js";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { useTheme } from "next-themes";

const PostComment = (comment) => {
  const [com, setComment] = useState(comment.comment)
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 100;
  const { theme } = useTheme()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-5 border m-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className=" h-[35px] w-[35px] rounded-full">
            <Image
              className="rounded-full"
              src={com.profile_image}
              height={55}
              width={55}
              sizes="(max-width: 768px) 100vw"
              alt="profile picture"
            />
          </div>

          <Link href={`/${encodeURIComponent(com.username)}/`}>
            {com.username}
          </Link>
          <h3> {format(com.created)}</h3>
        </div>
        <Menu>
          <Menu.Button>
            <BsThreeDots size={25} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={` ${theme === "light" ? `bg-white` : `bg-gray-500`
                } absolute right-0 botton-10 z-10 mt-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div className="py-1">
                <Menu.Item>
                  <button
                    className={` ${theme === "light"
                      ? `text-gray-800 hover:bg-gray-200`
                      : `text-white hover:bg-gray-700`
                      } block px-4 py-2 text-sm`}
                  >
                    Edit
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <p className="font-robotoLight m-2">
        {isExpanded
          ? com?.body
          : `${com?.body.slice(0, characterLimit)}...`}
      </p>
      {!isExpanded && com.body.length > characterLimit && (
        <button onClick={toggleExpand} className="read-more-button">
          Read more
        </button>
      )}
    </div>

  )
}

export default PostComment