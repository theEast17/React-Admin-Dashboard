import { ImSpinner9 } from "react-icons/im";
const Loader = () => {
  return (
    <span className="text-center text-3xl flex items-center justify-center"><ImSpinner9 className="animate-spin text-red"/></span>
  )
}

export default Loader