import React, { useState } from "react";
import ProgramListComponent from "../components/ProgramListComponent";
import { IProgram } from "../interface";
import ProgramDetailModal from "../components/ProgramDetailModal";
import { useFixed } from "../fixedContext";

type Prop = {
  className?: string;
  programList: IProgram[];
};
const ProgramPageComponent = ({ className = "", programList }: Prop) => {
  const { setFixed } = useFixed();

  const [selectedProgram, setSelectedProgram] = useState<
    IProgram | undefined
  >();

  const handleProgramSelected = (program: IProgram) => {
    setSelectedProgram(program);
    setFixed(true);
  };
  const handleModalClosed = () => {
    setSelectedProgram(undefined);
    setFixed(false);
  };
  return (
    <div>
      {selectedProgram && (
        <ProgramDetailModal
          onClose={handleModalClosed}
          program={selectedProgram}
        />
      )}
      <ProgramListComponent
        onSelect={handleProgramSelected}
        items={programList}
      />
    </div>
  );
};
export default ProgramPageComponent;
