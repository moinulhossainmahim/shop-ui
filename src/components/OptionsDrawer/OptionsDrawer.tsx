import { useDispatch, useSelector } from "react-redux";

import BaseDrawer from "../BaseDrawer";
import { ReduxStore } from "../../redux/store";
import { DrawerKey, setDrawer } from "../../redux/reducers/drawer";

const OptionsDrawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ReduxStore) => state.drawers.PageOptions);

  const onClose = () => {
    dispatch(setDrawer({ key: DrawerKey.PageOptions, value: false }));
  }

  const bodyContent = (
    <div>
      Hello world
    </div>
  )

  return (
    <BaseDrawer isOpen={isOpen} onClose={onClose} bodyContent={bodyContent} />
  )
}

export default OptionsDrawer;
