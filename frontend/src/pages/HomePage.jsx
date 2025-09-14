import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import axios from "axios";
import toast from "react-hot-toast";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/notes`);
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
        setLoading(false);
      } catch (error) {
        console.error(error);
        if (error.response.status === 429) setIsRateLimited(true);
        else toast.error("Notes can't be loaded");
      }
    };

    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen bg-base-200 px-20">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      {loading && (
        <div className="flex justify-center text-green-600 p-4">
          <div>Loading notes...</div>
        </div>
      )}
      {notes.length === 0 && !isRateLimited && <NotesNotFound />}
      {notes.length > 0 && !isRateLimited && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-20">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
