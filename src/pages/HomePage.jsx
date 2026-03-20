import Diagnosis from '../components/home/Diagnosis';
import Frustration from '../components/home/Frustration';
import ProblemReframe from '../components/home/ProblemReframe';
import MichaelIntro from '../components/home/MichaelIntro';
import ProcessSteps from '../components/home/ProcessSteps';
import SelectedWork from '../components/home/SelectedWork';
import Capabilities from '../components/home/Capabilities';
import IdealFit from '../components/home/IdealFit';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Diagnosis />
      <Frustration />
      <ProblemReframe />
      <MichaelIntro />
      <ProcessSteps />
      <SelectedWork />
      <Capabilities />
      <IdealFit />
      <FinalCTA />
    </div>
  );
}
