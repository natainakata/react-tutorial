import { useState } from "react";

const MemoForm = ({ addMemo }) => {
  const [memo, setMemo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMemo(memo);
    setMemo("");
  };

  return (
    <form onSubmit={handleSubmit} className="memo-form">
      <input
        type="text"
        placeholder="Enter memo"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
      <button type="submit">Add Memo</button>
    </form>
  );
};

export default MemoForm;
