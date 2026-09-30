import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

function DashboardPage() {
  const cards = [
    { title: "Total Tasks", number: 10, color: "bg-[#012E1D]" },
    { title: "Completed", number: 4, color: "bg-[#3CAE85]" },
    { title: "Pending", number: 6, color: "bg-[#8B1302]" },
  ];
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex flex-col sm:flex-row gap-4 justify-center p-4">
        {cards.map((card)=>(
          <Card key={card.title} {...card}/>
        ))}
      </div>
      <TaskList />
    </>
  );
}

export default DashboardPage;
