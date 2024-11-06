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
