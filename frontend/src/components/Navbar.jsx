import React from "react";
import { Link } from "react-router";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-base-200 p-6">
      <p className="text-green-500 font-mono text-3xl font-bold">ThinkBoard</p>
      <Link
        to={"/create"}
        className="text-white bg-green-700 font-mono text-2xl rounded-xl btn btn-primary"
      >
        <Plus />
        <span>Create Note</span>
      </Link>
    </div>
  );
};

export default Navbar;
