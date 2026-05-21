import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button onClick={() => inputRef.current?.focus()}>Click to focus</button>
      <input type="text" ref={inputRef} placeholder="This going to focus on click" />
      <br /><br /><br />
    </div>
  )
}

export default FocusInput