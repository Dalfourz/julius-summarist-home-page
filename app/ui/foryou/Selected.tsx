"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";

// Define an interface for the book data
interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRatingL: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: string;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

const Selected: React.FC = () => {
  const [selected, setSelected] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        setSelected(res.data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="for-you__title">Selected just for you</div>
      {/* Iterate over selected books and display them */}
      {selected.map((book, index) => (
        <div key={index} className="selected__book">
          <div className="selected__book--sub-title">{book.subTitle}</div>
          <div className="selected__book--line"></div>

          <div className="selected__book--content">
            <figure className="book__image--wrapper items-center justify-center">
              <img className="book__image w-[140px] h-[140px] " src={book.imageLink} alt="book" />
            </figure>
            <div className="selected__book--text">
              <div className="selected__book--title">{book.title}</div>
              <div className="selected__book--author">{book.author}</div>
              <div className="selected__book--duration-wrapper">
                <div className="selected__book--icon">
                  <FaPlayCircle />
                </div>
                <div className="selected__book--duration">3 mins 23 secs</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Selected;
