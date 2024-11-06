export default function ArticleSorter({ setArticleSortQuery }) {
  const handleChange = (event) => {
    setArticleSortQuery(event.target.value);
  };

  return (
    <>
      <p>Sort articles by:</p>
      <select name="sort-by" id="sort-by" onChange={handleChange}>
        <option value="&sort_by=created_at&order=desc">Select</option>
        <option value="&sort_by=created_at&order=desc">Newest first</option>
        <option value="&sort_by=created_at&order=asc">Oldest first</option>
        <option value="&sort_by=comment_count&order=desc">Most comments</option>
        <option value="&sort_by=comment_count&order=asc">Least comments</option>
        <option value="&sort_by=votes&order=desc">Most votes</option>
        <option value="&sort_by=votes&order=asc">Least votes</option>
      </select>
    </>
  );
}

// "GET /api/articles": {
//     "description": "serves an array of all articles. ",
//     "queries": ["author", "topic", "sort_by", "order", "page", "limit"],
//     "exampleResponse": {
//       "articles": [
//         {
//           "title": "Seafood substitutions are increasing",
//           "topic": "cooking",
//           "author": "weegembump",
//           "body": "Text from the article..",
//           "created_at": "2018-05-30T15:59:13.341Z",
//           "votes": 0,
//           "comment_count": "6"
//         }
//       ]
//     }
//   },

//when the sort by options are selected, the value of the option is sent as a combination
// for example value= "sort_by=date&order=asc"
// this is passed on as the url query
