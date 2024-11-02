import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, timeSpend }) => {

    return (
        <div className="md:w-1/3">
            <div className="text-2xl border rounded-lg border-[#6047EC] text-[#6047EC] mb-6 font-bold py-5 px-12 bg-[#6047EC1A]">
                <h2>Spent time on read : {timeSpend} min</h2>
            </div>
            <div className="bg-[#1111110D] p-8 rounded-md">
                <h2 className="text-2xl font-bold p-4">Bookmarked BLogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    timeSpend: PropTypes.number.isRequired
}

export default Bookmarks;