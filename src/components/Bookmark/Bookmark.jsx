import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} =bookmark;
    return (
        <div>
            <h3 className="text-2xl p-5 font-semibold my-4 bg-white rounded-lg">{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;