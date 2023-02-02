import React, { useState } from "react";

export default function SubmitConfrim() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <input
        id={"confirm"}
        type="checkbox"
        onChange={() => setAgreed(!agreed)}
      />
      <label htmlFor="confirm">
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
      </label>
      <br />
      <button type="submit" disabled={!agreed}>
        Submit
      </button>
    </div>
  );
}
