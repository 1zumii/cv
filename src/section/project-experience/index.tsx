import { FC } from 'react';
import Experience from '@src/components/experience';
import SectionTitle from '@src/components/section-title';
import { projects } from '@src/info';

const ProjectExperience: FC = () => (
  <div className="project-experience">
    <SectionTitle title="项目经历" />
    {projects.map((info) => <Experience key={info.key} info={info} />)}
  </div>
);

export default ProjectExperience;
