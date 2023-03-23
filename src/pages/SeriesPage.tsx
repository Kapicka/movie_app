import React from "react";
import program_list from "../data/programList.json";
import { IProgram } from "../interface";
import ProgramPageComponent from "../components/ProgramPageComponent";
import ProgramTypeEnum from "../enum/ProgramTypeEnum";

const SeriesPage = () => {
  const programList: IProgram[] = program_list.entries.filter(
    (program) => program.programType === ProgramTypeEnum.SERIES.toString()
  );

  return <ProgramPageComponent programList={programList} />;
};
export default SeriesPage;
