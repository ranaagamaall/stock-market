import StatCard from "../../../components/StatCard";
import reportData from "../../../assets/data/investor/report";
function Home() {
  return (
    <div className=" text-text">
      <div className="flex justify-between gap-8 h-fit translate-y-[-65%]">
        {reportData.map((data, index) => (
          <div className="w-full max-w-[min(30vw,18rem)]" key={index}>
            <StatCard
              stat={data}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
