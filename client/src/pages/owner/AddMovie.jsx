import React, { useState } from "react";
import { generateSeats } from "../../assets/assets";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { CirclePlus } from "lucide-react";

const AddMovie = () => {
  const {axios,currency} = useAppContext()
  const genrelist = [
    "Comedy/Action",
    "Love/Romance",
    "Mystery/Thriller",
    "Horror/Thriller",
    "Scientific/Thriller",
  ];
  const [isConfirming,setIsConfirming] = useState(false)
  const [movieImages, setMovieImages] = useState([]);
  const [castImages, setCastImages] = useState([]);
  const [dateString, setDateString] = useState("");
  const [showTimes, setShowTimes] = useState([""]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [screen, setScreen] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [castnames, setCastnames] = useState([]);
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setIsConfirming(true)
      if(!name || !screen || !castImages || !dateString || !description || !ticketPrice || !castnames || !genre || !showTimes || !movieImages){
        return toast.error("Fill all the fields")
      }
      const formData = new FormData();
      const date = new Date(dateString)
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());

      const movieData = {
        name,
        genre,
        description,
        castnames,
        screen,
        seats: generateSeats(),
        time: {
          year: year,
          date: `${day}-${month}-${year}`,
          showTime: showTimes,
        },
        ticketPrice,
      };
      formData.append("movieData", JSON.stringify(movieData));
      for (let i = 0; i < movieImages.length; i++) {
        formData.append("movieImages", movieImages[i]);
      }
      for (let i = 0; i < castImages.length; i++) {
        formData.append("castImages", castImages[i]);
      }
      console.log("movieImages length", movieImages.length);
      console.log("castImages length", castImages.length);
      const {data} = await axios.post('/api/owner/addmovies',formData)
      if(data.success){
        toast.success(data.message)
        setName("")
        setCastnames([])
        setCastImages([])
        setMovieImages([])
        setDescription("")
        setDateString([""])
        setGenre("")
        setScreen("")
        setShowTimes([""])
        setTicketPrice("")
      
      }else{
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
    finally{
      setIsConfirming(false)
    }
  };

  return (
    <div className="flex w-full h-full overflow-y-auto px-15 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-2/4 h-[950px] px-10 py-8 mt-10 gap-8 border mb-5"
      >
        {/* Movie name + Genre */}
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-1">
            <p className=" text-sm">Movie</p>
            <input
              className="border rounded-md py-2 px-4 focus:outline-none text-sm  border-red-600"
              type="text"
              placeholder="movie name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-sm">Genre</p>
            <select
              onChange={(e) => setGenre(e.target.value)}
              className="border rounded-md py-2 px-4 focus:outline-none text-sm  border-red-600"
            >
            <option hidden value='' className="text-sm ">Genre</option>
              {genrelist.map((item, i) => (
                <option value={item} className="text-sm" key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Movie posters */}
        <div className="flex flex-col border rounded-md p-4 items-center border-red-600">
          <p className="text-sm flex ">Upload Movie posters</p>
          <div className="flex gap-4 mt-3">
            {Array(2)
              .fill("")
              .map((_, i) => (
                <label className="border border-gray-400" key={i}>
                  <input
                  name="movieImages"
                    onChange={(e) => {
                      const copymovieImages = [...movieImages];
                      copymovieImages[i] = e.target.files[0];
                      setMovieImages(copymovieImages);
                    }}
                    type="file"
                    accept="image/*"
                    hidden
                  />
                  <img
                    className={`h-25 rounded-md object-contain ${
                      i > 0 ? "w-60" : "w-20"
                    }`}
                    src={
                      movieImages[i]
                        ? URL.createObjectURL(movieImages[i])
                        : "/images/defaultimage.jpg"
                    }
                  />
                </label>
              ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1">
            <p className=" text-sm">Date</p>
            <input
              type="date"
              value={dateString}
              onChange={(e) => setDateString(e.target.value)}
              className="text-sm border rounded-md py-2 px-4 focus:outline-none w-60  border-red-600"
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className=" text-sm flex">Screen</p>
            <input
              onChange={(e) => setScreen(e.target.value)}
              className="border px-3 py-1 w-8 flex text-sm focus:outline-none rounded-md  border-red-600"
              type="number"
            />
          </div>
        </div>

        {/* Multiple Show Times */}
        <div className="flex gap-2">
          {showTimes.map((time, i) => (
            <div key={i} className="flex flex-col gap-2 items-center">
              <div className="flex flex-col gap-1">
                <p className=" text-sm">Show Time {i + 1}</p>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => {
                    const updated = [...showTimes];
                    updated[i] = e.target.value;
                    setShowTimes(updated);
                  }}
                  className="text-sm border rounded-md py-2 px-3 focus:outline-none w-40  border-red-600"
                />
              </div>
              {showTimes.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const filtered = showTimes.filter(
                      (_, index) => index !== i
                    );
                    setShowTimes(filtered);
                  }}
                  className="text-red-500 text-xs"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {showTimes.length < 3 && (
            <button
              type="button"
              onClick={() => setShowTimes([...showTimes, ""])}
              className="text-green-500 text-sm flex justify-center"
            >
             <CirclePlus className="flex mt-7" />
            </button>
          )}
        </div>

        {/* Movie description */}
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-15 border rounded-md p-2 focus:outline-none text-xs flex-1  border-red-600"
          placeholder="Description of Movie"
          rows={3}
          cols={10}
        />

        {/* Movie Cast Uploads */}
        <div className="flex flex-col">
          <p className=" text-sm">Upload images and enter names of movie cast</p>
          <div className="flex gap-5 mt-2 justify-center border rounded-md p-4  border-red-600">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="w-30 h-20 flex flex-col justify-center items-center gap-2"
                >
                  <label className="flex border rounded-full p-1">
                    <input
                    name="castImages"
                      onChange={(e) => {
                        const copycastImages = [...castImages];
                        copycastImages[i] = e.target.files[0];
                        setCastImages(copycastImages);
                      }}
                      type="file"
                      accept="image/*"
                      hidden
                    />
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={
                        castImages[i]
                          ? URL.createObjectURL(castImages[i])
                          : "/images/defaultimage.jpg"
                      }
                    />
                  </label>
                  <input
                    onChange={(e) => {
                      const copyCastNames = [...castnames];
                      copyCastNames[i] = e.target.value;
                      setCastnames(copyCastNames);
                    }}
                    className="border w-full px-1 flex focus:outline-none text-xs h-8 rounded-md  border-red-600"
                    placeholder={`cast ${i + 1}`}
                    type="text"
                  />
                </div>
              ))}
          </div>
          
        </div>
        <div className="flex justify-center items-center w-full">
          <p className=" text-sm">Ticket Price :{currency}</p>
            <input className="border ml-2 px-6 py-1 w-1/6 text-sm text-green-500  border-red-600 font-medium"
              onChange={(e) => setTicketPrice(e.target.value)}
              type="number"
            />
            <p className="ml-1 flex">-/-</p>
          </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
          disabled={isConfirming}
            className={` text-white rounded-full py-2 px-6 w-60  text-sm ${isConfirming?'bg-red-600':'bg-red-500'}`}
           
          >
            {isConfirming?'Adding Movie...':"Submit Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
