import { useState } from "react";


const INITIAL_INFO = {
    url: "",
    tag: "",
    title: "",
  };



function BookmarkList() {
  const [bookmark, setBookmark] = useState(INITIAL_INFO);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filter, setFilter] = useState();

  const handleInput = (e) => {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookmarkList([...bookmarkList, bookmark]);
    setBookmark(INITIAL_INFO);
  };

  const bookmarksHTML = bookmarkList
    .filter((bookmark) => (filter ? bookmark.tag === filter : bookmark))
    .map((bookmark, index) => (
      <li key={index}>
        <a href={bookmark.url}>{bookmark.title}</a>
      </li>
    ));

  // const bookmarks = bookmarkList.map((bookmark) => bookmark.tag);
  // const uniqueBookmarks = new Set(bookmarks);
  // const uniqueBookmarksArray = [...uniqueBookmarks];

  const tagList = [...new Set(bookmarkList.map((bookmark) => bookmark.tag))];
  const tagListHTML = tagList.map((tag, index) => (
    <li>
      <button key={index} onClick={() => setFilter(tag)}>
        {tag}
      </button>
    </li>
  ));

  return (
    <>
      <h2>URL Bookmarking</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>URL</label>
        <input
          name="url"
          type="url"
          placeholder="Enter URL ..."
          value={bookmark.url}
          onChange={handleInput}
        />
        <label>Tag</label>
        <input
          name="tag"
          type="text"
          placeholder="Enter Tag ..."
          value={bookmark.tag}
          onChange={handleInput}
        />
        <label>Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter Title ..."
          value={bookmark.title}
          onChange={handleInput}
        />
        <div className="save-button">
            <button type="submit">Save</button>
        </div>
      </form>
      <nav>
        <ul className="tag-buttons">
          <li>
            <button onClick={() => setFilter(null)}>All</button>
          </li>
          {tagListHTML}
        </ul>
      </nav>
      <ul className="url-list">{bookmarksHTML}</ul>
    </>
  );
}

export default BookmarkList;