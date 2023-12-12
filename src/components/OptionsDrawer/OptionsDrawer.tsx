import BaseDrawer from "../BaseDrawer";

interface FilterDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsDrawer = ({ isOpen, setIsOpen } : FilterDrawerProps) => {

  const bodyContent = (
    <div>
      Hello world
    </div>
  )

  return (
    <BaseDrawer isOpen={isOpen} setIsOpen={setIsOpen} bodyContent={bodyContent} />
  )
}

export default OptionsDrawer;
