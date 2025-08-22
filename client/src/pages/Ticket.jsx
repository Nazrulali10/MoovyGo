import React, { useRef } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { generateDate } from "../assets/assets";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

const Ticket = () => {
  const { selectedSeats, selectedShow, setSelectedSeats, currency, movies , setShowAnimation , Navigate } = useAppContext();
  const { id } = useParams();
  const movie = movies.find((item) => item._id === id);
  const ticket = useRef();

  const download = () => {
    try {
      html2canvas(ticket.current, { scale: 2, useCORS: true }).then((canvas) => {
        const pdf = new jspdf("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Ticket.pdf");
        setSelectedSeats([]);
        setShowAnimation(true)
        setTimeout(()=>{
          setShowAnimation(false)
           Navigate('/')
        },3000)
       
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="h-auto flex flex-col md:flex-row w-full justify-center items-center mb-10 md:mt-0 mt-10 ">
      <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-1 md:py-0 md:mb-0 mb-10 text-black dark:text-white">
        <p className="text-2xl md:text-4xl ">Thanks for Booking</p>
        <p className="text-xs md:text-sm text-red-500 dark:text-red-600">Click the ticket to download !!</p>
      </div>

      <div
        onClick={download}
        ref={ticket}
        className="w-[400px] min-h-[600px] flex flex-col border px-5 md:px-15 gap-5 py-4 shadow bg-white"
        style={{ borderColor: "#9ca3af" }}
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-15 md:w-25 flex flex-col gap-1">
            <h1 className="text-xl md:text-3xl font-bold mb-2">Ticket</h1>
            <div className="h-0.5 w-full rounded-full" style={{ backgroundColor: "#ef4444" }}></div>
          </div>
        </div>

        <div className="flex gap-2 items-center font-semibold">
          <p className="text-lg md:text-xl">{movie.name}</p>
          <p className="text-lg md:text-xl">{movie.time.year}</p>
        </div>

        <div>
          <p className="text-sm">
            Theatre name: <span style={{ color: "#ef4444" }}>MoovyGo</span>
          </p>
          <p className="text-sm">
            Screen: <span style={{ color: "#ef4444" }}>{movie.screen}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-sm">
            Show time: <span style={{ color: "#ef4444" }}>{selectedShow}</span>
          </p>
          <p className="text-sm">
            Date: <span style={{ color: "#ef4444" }}>{generateDate({ movie })}</span>
          </p>
        </div>

        <p className="text-sm">
          Seats:
          <span style={{ color: "#ef4444" }}> {selectedSeats.join(", ")}</span>
        </p>

        <p className="text-sm">
          Price:
          <span className="ml-1" style={{ color: "#ef4444" }}>
            {currency}
            {selectedSeats.length * movie.ticketPrice}/-
          </span>
        </p>

        <p className="text-sm">
          Booked date:
          <span style={{ color: "#ef4444" }}>
            {" "}
            {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
          </span>
        </p>

        <p className="text-sm">
          Booked time:
          <span style={{ color: "#ef4444" }}>
            {" "}
            {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, "0")}
          </span>
        </p>

        <div>
          <p className="text-xs" style={{ color: "#000000" }}>
            Note:
            <span style={{ color: "#ef4444" }}>
              {" "}
              All ticket sales are final. No refunds, cancellations. Latecomers may not be admitted until a suitable break. Outside food and beverages are not allowed. Weapons, sharp objects, or any dangerous materials are strictly prohibited. Do not attend if you are feeling unwell or showing symptoms. The management is not responsible for any lost, stolen, or damaged tickets.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

