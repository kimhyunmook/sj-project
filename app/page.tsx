import { NavigationBar } from '@/components/NavigationBar';
import { ProjectInfo } from '@/components/ProjectInfo/ProjectInfo';

export default function Home() {
  return (
    <div className="bg-black flex flex-col gap-10 items-center justify-center h-screen">
      <NavigationBar />
      <ProjectInfo />
      <h1>Home</h1>
    </div>
  );
}
