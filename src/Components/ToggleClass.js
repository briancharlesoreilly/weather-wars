import { useState} from "react" 

const ToggleClass = () => {
  const [isActive, setActive] = useState(false);
  setActive(!isActive);
  console.log("is active:",isActive);
}

export default ToggleClass