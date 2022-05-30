import { FC } from 'react';
import Experience from '@src/components/experience';
import SectionTitle from '@src/components/section-title';
import { education as info } from '@src/info';

const EducationExperience: FC = () => (
  <div className="education-experience">
    <SectionTitle title="教育经历" />
    <Experience info={info} />
  </div>
);

export default EducationExperience;
