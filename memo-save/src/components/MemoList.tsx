const MemoList = ({ memos }) => {
  return (
    <ul className="memo-list">
      {memos.map((memo: string, index: number) => (
        <li key={index}>{memo}</li>
      ))}
    </ul>
  );
};

export default MemoList;
