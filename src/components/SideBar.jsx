/* eslint-disable react/prop-types */
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import Link from "./Link";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <Sheet onOpenChange={onClose} open={isOpen}>
      <SheetContent>
        <SheetHeader></SheetHeader>
        <div className="w-[70%] flex flex-col gap-5 pt-24 font-bold text-xl">
          <Link to="#" name="Home" />
          <Link to="#" name="New" />
          <Link to="#" name="Popular" />
          <Link to="#" name="Treding" />
          <Link to="#" name="Categories" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
